package main

import (
	"log"
	"net/http"
	"sync"

	"github.com/gorilla/websocket"
)

type Message struct {
	Role  string `json:"role"`
	Code  string `json:"code"`
	Name  string `json:"name"`
	Info  string `json:"info"`
	Value string `json:"value"`
}

var teachers = make(map[*websocket.Conn]string)
var students = make(map[*websocket.Conn]string)
var broadcast = make(chan Message)
var upgrader = websocket.Upgrader{}
var mu sync.RWMutex

func main() {
	http.HandleFunc("/ws", handleConnections)
	go handleMessages()
	log.Println("http server started on :8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

func handleConnections(w http.ResponseWriter, r *http.Request) {
	upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}

	defer ws.Close()

	for {
		var msg Message
		err := ws.ReadJSON(&msg)
		role := msg.Role
		if role == "teacher" {
			mu.Lock()
			teachers[ws] = msg.Code
			mu.Unlock()
		}
		if role == "student" {
			mu.Lock()
			students[ws] = msg.Code
			mu.Unlock()
		}
		if err != nil {
			log.Printf("error: %v", err)
			if role == "teacher" {
				delete(teachers, ws)
			}
			if role == "student" {
				delete(students, ws)
			}
			break
		}

		broadcast <- msg
	}

}

func handleMessages() {
	for {
		msg := <-broadcast
		if msg.Role == "teacher" {
			teacherCode := msg.Code
			mu.RLock()
			for student, code := range students {
				if code == teacherCode {
					err := student.WriteJSON(msg)
					if err != nil {
						log.Printf("error: %v", err)
						student.Close()
						delete(students, student)
					}
				}
			}
			mu.RUnlock()
		}
		if msg.Role == "student" {
			studentCode := msg.Code
			mu.RLock()
			for teacher, code := range teachers {
				if code == studentCode {
					err := teacher.WriteJSON(msg)
					if err != nil {
						log.Printf("error: %v", err)
						teacher.Close()
						delete(teachers, teacher)
					}
				}
			}
			mu.RUnlock()
		}
	}
}
