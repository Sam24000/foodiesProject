// Importing the express library
const express = require("express");

// Creating a new router instance
const router = express.Router();

// Defining a POST route for '/fooddata'
router.post('/fooddata', async (req, res) => {
    try {
        // Uncomment the following lines if needed for debugging purposes
        // console.log(global.users);
        // res.send(global.users);
        // console.log(global.category);

        // Sending a response containing an array with global 'items' and 'category' data
        await res.send([global.items, global.category]);

        // Logging a success message if the response is sent successfully
        console.log("success fooddata");
    } catch (error) {
        // If there's an error during execution, log the error message
        console.log(error.message);
        // Sending a response with "error" string in case of any errors
        res.send("error");
    }
});

// Exporting the router to be used in other parts of the application
module.exports = router;
