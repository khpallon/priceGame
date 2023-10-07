// Establish a WebSocket connection
const socket = new WebSocket("ws://localhost:8080/socket");

console.log("Attempting WS CONNECTION")

socket.onopen = () => {
    console.log("We are live!")
}

socket.onclose = (event) => {
    console.log("WS CONNECTION STOPPED", event)
    
}

socket.onerror = (error) => {
    console.log("ON ERROR:", error)
}