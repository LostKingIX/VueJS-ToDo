/*
Name: db.js
Description: MongoDB connection setup using Mongoose.
Purpose: This file is responsible for establishing a connection to the MongoDB database. It uses the Mongoose library to connect to the database using the connection string stored in the environment variables.

Components/Functions to Highlight:
1. Mongoose Connection: Connects to MongoDB using Mongoose and handles connection success or error.
2. Environment Variables: Uses dotenv to securely load the MongoDB URI from the .env file.
3. Connection Options: Configures Mongoose with options like `useNewUrlParser` and `useUnifiedTopology` to ensure compatibility with the MongoDB driver.
*/

const mongoose = require('mongoose');

// Replace <username>, <password>, and <dbname> with actual credentials
const mongoURI = 'mongodb+srv://kuser:required123@todo-database.j8rw1.mongodb.net/?retryWrites=true&w=majority&appName=ToDo-Database';

// Connect to MongoDB
mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));
