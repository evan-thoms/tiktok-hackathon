package main

import (
	"context"
	"fmt"
	"os"
	"strings"

	"github.com/joho/godotenv"
	"github.com/sashabaranov/go-openai"
)

func main() {
	openaiChat("Respond with only one work (the category). Classify this message into one of these only{ travel, cars, programming, market, photography, miscellaneous}: My new cannon camera takes such clear photos!!") // Call the function with a message
}

func openaiChat(message string) string {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
	}

	// get openai token from environment variable
	token := os.Getenv("OPENAI_API_KEY")

	client := openai.NewClient(token)
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo,
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleUser,
					Content: message,
				},
			},
		},
	)

	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return ""
	}

	fmt.Println(resp.Choices[0].Message.Content)

	// see if the response is a category
	// if it is, return the category
	// if it isn't, return "miscellaneous"
	if strings.Contains(resp.Choices[0].Message.Content, "travel") {
		return "travel"
	} else if strings.Contains(resp.Choices[0].Message.Content, "cars") {
		return "cars"
	} else if strings.Contains(resp.Choices[0].Message.Content, "programming") {
		return "programming"
	} else if strings.Contains(resp.Choices[0].Message.Content, "market") {
		return "market"
	} else if strings.Contains(resp.Choices[0].Message.Content, "photography") {
		return "photography"
	} else {
		return "miscellaneous"
	}
}
