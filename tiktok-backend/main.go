package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	//"time"

	"github.com/go-resty/resty/v2"
	"github.com/gorilla/handlers"
	"github.com/gorilla/websocket"
	_ "github.com/lib/pq"
	"github.com/redis/go-redis/v9"
)

var db *sql.DB
var redisClient *redis.Client

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true // Allow all origins
	},
}

func main() {
	// connStr := "user=evanthoms password=password dbname=tiktok_hackathon sslmode=disable"
	// db, err = sql.Open("postgres", connStr)
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// defer db.Close()

	var err error

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Default port if not specified
	}

	dbUrl := os.Getenv("DATABASE_URL")
	db, err = sql.Open("postgres", dbUrl)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	redisAddr := os.Getenv("REDIS_URL")
	if redisAddr == "" {
		redisAddr = "localhost:6379" // Default value
	}

	redisClient = redis.NewClient(&redis.Options{
		Addr: redisAddr,
	})

	// CORS setup
	corsHandler := handlers.CORS(
		handlers.AllowedOrigins([]string{"https://tiktok-frontend.onrender.com"}), // Change this to the domain(s) you want to allow
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}),
		handlers.AllowedHeaders([]string{"Content-Type", "Authorization"}),
	)

	mux := http.NewServeMux()
	mux.HandleFunc("/", handleIndex)
	mux.HandleFunc("/submit", handleSubmit)
	mux.HandleFunc("/ws", handleWebSocket)
	mux.Handle("/dist/", http.StripPrefix("/dist/", http.FileServer(http.Dir("dist"))))

	log.Printf("Server is running on :%s", port)
	log.Fatal(http.ListenAndServe(":"+port, corsHandler(mux)))
}

func handleIndex(w http.ResponseWriter, r *http.Request) {
	// Set CORS headers
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	// Get contents from the database
	contents, err := getContents()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Set the response header for JSON
	w.Header().Set("Content-Type", "application/json")

	// Encode contents to JSON and write to response
	if err := json.NewEncoder(w).Encode(contents); err != nil {
		http.Error(w, "Error encoding JSON", http.StatusInternalServerError)
		return
	}
}

type Content struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	ImageURL    string `json:"imageUrl"`
	Tag         string `json:"tag"`
}

func handleSubmit(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		log.Printf("Received %s request, but POST is required", r.Method)
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Parse the JSON body
	var content Content
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&content); err != nil {
		log.Printf("Error decoding request body: %v", err)
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// Validate content
	if content.Title == "" || content.Description == "" || content.ImageURL == "" {
		log.Printf("Invalid content data received: %+v", content)
		http.Error(w, "Content fields cannot be empty", http.StatusBadRequest)
		return
	}

	// getting tags
	category, err := classifyContent(content.Title, content.Description)
	if err != nil {
		log.Fatalf("Error classifying content: %v", err)
	}

	// Insert content into the database
	log.Printf("Inserting content into database: %+v", content)
	_, err = db.Exec("INSERT INTO content (title, description, image_url, tag) VALUES ($1, $2, $3, $4)", content.Title, content.Description, content.ImageURL, category)
	if err != nil {
		log.Printf("Error inserting content into database: %v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Publish the content to Redis
	jsonContent, _ := json.Marshal(content)
	log.Printf("Publishing content to Redis: %s", string(jsonContent))
	err = redisClient.Publish(r.Context(), "new_content", jsonContent).Err()
	if err != nil {
		log.Printf("Error publishing to Redis: %v", err)
		http.Error(w, "Error publishing content", http.StatusInternalServerError)
		return
	}

	log.Printf("Content successfully handled: %+v", content)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "success"})
}

func handleWebSocket(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	defer conn.Close()

	pubsub := redisClient.Subscribe(r.Context(), "new_content")
	defer pubsub.Close()

	for {
		msg, err := pubsub.ReceiveMessage(r.Context())
		if err != nil {
			log.Println(err)
			return
		}

		log.Println("Received message from Redis:", msg.Payload)

		if err := conn.WriteMessage(websocket.TextMessage, []byte(msg.Payload)); err != nil {
			log.Println(err)
			return
		}
	}
}

func getContents() ([]Content, error) {
	rows, err := db.Query("SELECT title, description, image_url, tag FROM content ORDER BY created_at DESC")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var contents []Content
	for rows.Next() {
		var content Content
		if err := rows.Scan(&content.Title, &content.Description, &content.ImageURL, &content.Tag); err != nil {
			return nil, err
		}
		contents = append(contents, content)
	}

	return contents, nil
}

type OpenAIResponse struct {
	Choices []struct {
		Message struct {
			Content string `json:"content"`
		} `json:"message"`
	} `json:"choices"`
}

func classifyContent(title, description string) (string, error) {
	apiKey := os.Getenv("OPENAI_API_KEY")
	if apiKey == "" {
		return "", fmt.Errorf("OpenAI API key is missing")
	}

	client := resty.New()
	prompt := fmt.Sprintf(`Given the title and description below, classify the content into one of the following categories: travel, programming, cars, market, photography, miscellaneous.
	
	Title: %s
	Description: %s

	Respond with only the category name.`, title, description)

	response, err := client.R().
		SetHeader("Content-Type", "application/json").
		SetHeader("Authorization", "Bearer "+apiKey).
		SetBody(map[string]interface{}{
			"model": "gpt-4", // or gpt-3.5-turbo
			"messages": []map[string]string{
				{"role": "user", "content": prompt},
			},
			"max_tokens": 10, // Small limit since we expect a short response
		}).
		Post("https://api.openai.com/v1/chat/completions")

	if err != nil {
		return "", fmt.Errorf("failed to classify content: %w", err)
	}

	var result OpenAIResponse
	if err := json.Unmarshal(response.Body(), &result); err != nil {
		return "", fmt.Errorf("failed to parse response: %w", err)
	}

	if len(result.Choices) == 0 {
		return "", fmt.Errorf("no choices returned")
	}

	category := result.Choices[0].Message.Content

	return category, nil
}
