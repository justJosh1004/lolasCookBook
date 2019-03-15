const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Recipe Schema
const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: [
    {
      name: {
        type: String,
        require: true
      },
      quantity: {
        type: String
      },
      measurement: {
        type: String
      }
    }
  ],
  steps: [
    {
      text: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);
