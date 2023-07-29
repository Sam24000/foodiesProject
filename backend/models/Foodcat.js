// Importing mongoose library
const mongoose = require('mongoose');

// Destructuring 'Schema' from mongoose object
const { Schema } = mongoose;

// Creating a new schema for food categories
const foodCatSchema = new Schema({
    CategoryName: {
        type: String,
        required: true
    }
});

// Creating a model 'foodcat' based on the 'foodCatSchema' and naming the collection as 'categories'
const foodcat = mongoose.model('categories', foodCatSchema);

// Exporting the 'foodcat' model to be used in other parts of the application
module.exports = foodcat;
