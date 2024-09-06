// Import the Express library to create the server
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define the port number where the server will listen for requests
const port = 5000;

// Middleware: Allows the server to parse incoming requests with JSON payloads
// This is essential when sending data (like user info or tasks) in JSON format from the frontend (React)
app.use(express.json());

// Define a GET route for the root URL ('/')
// When a user sends a GET request to http://localhost:5000/, it will respond with the message 'Hello from Express!'
app.get('/', (req, res) => {
    res.send('Hello from Express!'); // Sending a response back to the client
});

// Start the server and make it listen on the specified port (5000)
// Once the server is running, it logs a message indicating the server is live and listening for requests
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`); // Output to indicate the server is up and running
});
