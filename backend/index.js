// Importing required modules and libraries
const express = require('express');
const app = express();
const port = 5000;

// Importing the 'mongoDB' function to establish a connection to the MongoDB database
const mongoDB = require('./goosedb');
mongoDB(); // Calling the function to establish the connection

// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    // Allowing requests from 'http://localhost:3000' origin
    res.setHeader("Access-Control-Allow-Origin", "https://foodies-frontend.onrender.com"),
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
    next();
});

// Middleware to parse incoming JSON data
app.use(express.json());

// Defining routes for handling different APIs
app.use('/api', require('./Routes/Userdata'));
app.use('/api', require('./Routes/Displaydbdata'));

// Default route for testing purposes
app.get('/', (req, res) => {
    res.send("hello");
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Listening at port no ${port}`);
});
