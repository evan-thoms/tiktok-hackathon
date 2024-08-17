package main

import (
	"database/sql"
	"encoding/json"
	"html/template"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/handlers"

	"github.com/gorilla/websocket"

	_ "github.com/lib/pq"
	"github.com/redis/go-redis/v9"
)

var redisClient *redis.Client
var db *sql.DB

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

type Content struct {
	ID        int       `json:"id"`
	Text      string    `json:"text_content"`
	ImageURL  string    `json:"imageUrl"`
	CreatedAt time.Time `json:"created_at"`
}

func main() {
	var err error

	// PostgreSQL connection string
	connStr := "user=evanthoms password=password dbname=tiktok_hackathon sslmode=disable"
	db, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	redisClient = redis.NewClient(&redis.Options{
		Addr: "localhost:6379",
	})

	corsHandler := handlers.CORS(
		handlers.AllowedOrigins([]string{"*"}), // Adjust this to limit origins if necessary
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}),
		handlers.AllowedHeaders([]string{"Content-Type", "Authorization"}),
	)
	// http.Handle("/", corsHandler(http.HandlerFunc(handleIndex)))
	http.Handle("/", http.FileServer(http.Dir("build")))

	http.Handle("/api/submit-content", corsHandler(http.HandlerFunc(handleSubmitContent)))
	http.Handle("/ws", corsHandler(http.HandlerFunc(handleWebSocket)))

	http.Handle("/dist/", http.StripPrefix("/dist/", http.FileServer(http.Dir("dist"))))

	// http.HandleFunc("/", handleIndex)
	// http.HandleFunc("/api/submit-content", handleSubmitContent)
	// http.HandleFunc("/ws", handleWebSocket)

	// http.Handle("/dist/", http.StripPrefix("/dist/", http.FileServer(http.Dir("dist"))))

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Default port if not specified
	}

	log.Printf("Server is running on :%s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func handleIndex(w http.ResponseWriter, r *http.Request) {
	contents, err := getContents()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	tmpl, err := template.ParseFiles("index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	tmpl.Execute(w, contents)
}

func handleSubmitContent(w http.ResponseWriter, r *http.Request) {
	// w.Write([]byte(`{"message": "starting content submit"}`))
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Parsing JSON payload from the request body
	var req struct {
		Title       string `json:"title"`
		Description string `json:"description"`
		ImageURL    string `json:"imageUrl"`
	}

	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	// Validate fields
	if req.Title == "" || req.Description == "" || req.ImageURL == "" {
		http.Error(w, "All fields are required", http.StatusBadRequest)
		return
	}

	// Insert content into PostgreSQL
	_, err := db.Exec("INSERT INTO content (text_content, imageUrl) VALUES ($1, $2)", req.Description, req.ImageURL)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Publish new content to Redis
	newContent := Content{
		Text:      req.Description,
		ImageURL:  req.ImageURL,
		CreatedAt: time.Now(),
	}
	jsonContent, _ := json.Marshal(newContent)
	err = redisClient.Publish(r.Context(), "new_content", jsonContent).Err()
	if err != nil {
		log.Printf("Error publishing to Redis: %v", err)
	}

	w.WriteHeader(http.StatusCreated)
	w.Write([]byte(`{"message": "Content submitted successfully"}`))
}

// func handleSubmit(w http.ResponseWriter, r *http.Request) {
// 	if r.Method != http.MethodPost {
// 		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
// 		return
// 	}

// 	textContent := r.FormValue("text_content")
// 	imageURL := r.FormValue("image_url")
// 	if textContent == "" || imageURL == "" {
// 		http.Error(w, "Content or image URL cannot be empty", http.StatusBadRequest)
// 		return
// 	}

// 	_, err := db.Exec("INSERT INTO content (text_content, imageurl) VALUES ($1, $2)", textContent, imageURL)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusInternalServerError)
// 		return
// 	}

// 	newContent := Content{
// 		Text:      textContent,
// 		ImageURL:  imageURL,
// 		CreatedAt: time.Now(),
// 	}
// 	jsonContent, _ := json.Marshal(newContent)
// 	err = redisClient.Publish(r.Context(), "new_content", jsonContent).Err()
// 	if err != nil {
// 		log.Printf("Error publishing to Redis: %v", err)
// 	}

// 	http.Redirect(w, r, "/", http.StatusSeeOther)
// }

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
	rows, err := db.Query("SELECT id, text_content, imageUrl, created_at FROM content ORDER BY created_at DESC")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var contents []Content
	for rows.Next() {
		var content Content
		if err := rows.Scan(&content.ID, &content.Text, &content.ImageURL, &content.CreatedAt); err != nil {
			return nil, err
		}
		contents = append(contents, content)
	}

	return contents, nil
}
