// Importing required modules and libraries
const mongoose = require('mongoose');

// Importing the necessary Mongoose models
const itemSchema = require('./models/Items');
const foodcatSchema = require('./models/Foodcat');

// MongoDB connection URI
const mdbURI = "mongodb://foodies:Sam24000@ac-tjqkc5c-shard-00-00.nepfton.mongodb.net:27017,ac-tjqkc5c-shard-00-01.nepfton.mongodb.net:27017,ac-tjqkc5c-shard-00-02.nepfton.mongodb.net:27017/foodies?ssl=true&replicaSet=atlas-9fvo3n-shard-0&authSource=admin&retryWrites=true&w=majority";

// Function to establish a MongoDB connection
const mongodb = async () => {
  try {
    // Connecting to the MongoDB database using the provided URI
    await mongoose.connect(mdbURI);

    // Retrieving data from the 'items' collection using the 'itemSchema' model
    itemSchema.find().then((result) => {
      // Storing the retrieved items data in the global variable 'items'
      global.items = result;
    }).catch((err) => {
      console.log(err);
    });

    // Retrieving data from the 'foodcat' collection using the 'foodcatSchema' model
    foodcatSchema.find().then((foodcat) => {
      // Storing the retrieved food categories data in the global variable 'category'
      global.category = foodcat;
    }).catch((err) => {
      console.log(err);
    });

    console.log("Connected to MongoDB successfully");

  } catch (error) {
    // If there's an error during MongoDB connection, log the error
    console.log("Error connecting to MongoDB:", error);
  }
}

// Export the 'mongodb' function to be used in other parts of the application
module.exports = mongodb;
