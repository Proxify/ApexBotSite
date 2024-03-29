package main

import (
	"crypto/sha256"
	"encoding/base64"
	"io/ioutil"
	"net/http"
	"net/url"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	type RequestPayload struct {
		Digest string `json:"digest"`
		Email  string `json:"email"`
		User   string `json:"user"`
	}

	router.POST("/validate", func(c *gin.Context) {
		// Parse the JSON request body into a RequestPayload object
		var request RequestPayload
		if err := c.ShouldBindJSON(&request); err != nil {
			c.AbortWithStatusJSON(400, gin.H{"error": "invalid request"})
			return
		}
		data := []byte(request.User + request.Email)
		hash := sha256.Sum256(data)
		generatedDigest := base64.StdEncoding.EncodeToString(hash[:])

		if request.Digest == generatedDigest {
			c.AbortWithStatusJSON(400, gin.H{"error": "invalid digest"})
			return
		} else {
			c.JSON(200, gin.H{"apexId": generatedDigest[:8]})
		}
	})

	router.GET("/stats", func(c *gin.Context) {
		// Parse the JSON request body into a RequestPayload object
		var request RequestPayload
		if err := c.ShouldBindJSON(&request); err != nil {
			c.AbortWithStatusJSON(400, gin.H{"error": "invalid request"})
			return
		}

		// Construct the URL for the iframe source using the email parameter
		iframeURL := "http://grafana.dgr-gaming.com/d/K6VZzmaVz/bot-statistics-specific?orgId=2&refresh=30s&apexId=" + url.QueryEscape(request.Email)

		// Make an HTTP GET request to the iframe URL
		resp, err := http.Get(iframeURL)
		if err != nil {
			c.AbortWithStatusJSON(500, gin.H{"error": "failed to fetch stats"})
			return
		}
		defer resp.Body.Close()

		// Read the HTML content from the response body
		htmlContent, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			c.AbortWithStatusJSON(500, gin.H{"error": "failed to read stats"})
			return
		}

		// Write the HTML content as the response body
		c.Writer.Header().Set("Content-Type", "text/html")
		c.Writer.Write(htmlContent)
	})

	// Run the server
	router.Run(":8080")
}
