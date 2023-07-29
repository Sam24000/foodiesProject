// Importing mongoose library
const mongoose = require('mongoose');

// Destructuring 'Schema' from mongoose object
const { Schema } = mongoose;

// Creating a new schema for users
const userSchema = new Schema({
    // name field, representing the name of the user
    name: {
        type: String,
        required: true
    },

    // email field, representing the email address of the user
    email: {
        type: String,
        required: true
    },

    // password field, representing the password of the user
    password: {
        type: String,
        required: true
    },

    // location field, representing the location of the user (optional)
    location: {
        type: String
        // required: true // Uncomment this line if the location is required
    },

    // date field, representing the registration date of the user, set to the current date by default
    date: {
        type: Date,
        default: Date.now
    }
});

// Creating a model 'user' based on the 'userSchema' and naming the collection as 'user'
const user = mongoose.model('user', userSchema);

// Exporting the 'user' model to be used in other parts of the application
module.exports = user;
