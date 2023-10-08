// Establish a WebSocket connection
const socket = new WebSocket("ws://localhost:8080/socket");

console.log("Attempting WS CONNECTION")

socket.onopen = () => {
    console.log("We are live!")
}

socket.addEventListener("open", (event) => {
    console.log("WebSocket connection established.");
});


function typer(){
    var har
    var msg = document.getElementById("message").value
    var tag = document.createElement("p");
    var text = document.createTextNode(msg);
    har = tag.appendChild(text);
    var element = document.getElementById("middle");
    element.appendChild(tag);
}

socket.onclose = (event) => {
    console.log("WS CONNECTION STOPPED", event)
    
}

socket.onerror = (error) => {
    console.log("ON ERROR:", error)
}