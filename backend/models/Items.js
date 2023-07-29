// Importing mongoose library
const mongoose = require('mongoose');

// Destructuring 'Schema' from mongoose object
const { Schema } = mongoose;

// Creating a new schema for items
const itemSchema = new Schema({
  // CategoryName field, representing the category of the item
  CategoryName: {
    type: String,
    required: true
  },

  // name field, representing the name of the item
  name: {
    type: String,
    required: true
  },

  // img field, representing the image URL of the item
  img: {
    type: String,
    required: true
  },

  // options field, an array of objects representing half and full portion options
  options: [
    {
      // half field, representing the price for half portion of the item
      half: {
        type: Number,
        required: true
      },

      // full field, representing the price for full portion of the item
      full: {
        type: Number,
        required: true
      }
    }
  ],

  // description field, representing the description of the item
  description: {
    type: String,
    required: true
  }
});

// Creating a model 'item' based on the 'itemSchema' and naming the collection as 'item'
const item = mongoose.model('item', itemSchema);

// Exporting the 'item' model to be used in other parts of the application
module.exports = item;
