package main

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
	//"github.com/go-chi/chi/middleware"
)

func main() {
	r := chi.NewRouter()
	// r.Use(middleware.Logger)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("root"))
		fmt.Println("/")
	})
	r.Get("/api", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("api"))
		fmt.Println("/api")
	})
	http.ListenAndServe(":3001", r)
}