const express = require('express');
const router = express.Router();

// Load Recipes Model
const Recipe = require('../../models/Recipe');
// const Recipes = require('../../models/Recipes');

// @route   GET api/test
// @desc    Test recipes route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Recipes Works!' }));

// @route   GET api/recipe
// @desc    Get a recipe
// @access  Public

// @route   GET api/recipes
// @desc    Get all the recipes
// @access  Public
router.get('/', (req, res) => {
  const errors = {};

  Recipe.find({}, (err, recipe) => {
    if (err) {
      res.json({ msg: 'There was an error' });
    } else {
      res.json(recipe);
    }
  });
});

// @route   POST api/recipe
// @desc    Create a recipe
// @access  Private
router.post('/', (req, res) => {
  const recipeFields = {};

  recipeFields.recipe = req.body.name;
  if (req.body.name) recipeFields.name = req.body.name;

  recipeFields.ingredients = {};
  if (req.body.ing) recipeFields.ingredients.ing = req.body.ing;
  if (req.body.quantity) recipeFields.ingredients.quantity = req.body.quantity;
  if (req.body.measurement)
    recipeFields.ingredients.measurement = req.body.measurement;

  recipeFields.steps = {};
  if (req.body.step) recipeFields.steps.step = req.body.step;
  if (req.body.text) recipeFields.steps.text = req.body.text;

  Recipe.findOne({ name: req.body.name }).then(recipe => {
    if (recipe) {
      Recipe.findOneAndUpdate(
        { name: req.body.name },
        { $set: recipeFields },
        { new: true }
      ).then(recipe => res.json(recipe));
      // res.json({ msg: 'Recipe already exists' });
    } else {
      new Recipe(recipeFields).save().then(recipe => res.json(recipe));
    }
  });
});

// @route   DELETE api/recipe
// @desc    Delete a recipe
// @access  Private

module.exports = router;
