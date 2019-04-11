const express = require('express');
const router = express.Router();

// Validation
const validateRecipeInput = require('../../validation/recipe');

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

// @route   GET api/recipes/:id
// @desc    Get one recipes
// @access  Public
router.get('/:id', (req, res) => {
  const errors = {};

  Recipe.findOne({ _id: req.params.id }, (err, recipe) => {
    if (err) {
      errors.noRecipe = 'There is no recipe';
      res.status(404).json(errors);
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

  const { errors, isValid } = validateRecipeInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  recipeFields.recipe = req.body.name;
  if (req.body.name) recipeFields.name = req.body.name;

  recipeFields.ingredients = [];
  if (req.body.ingredients) {
    req.body.ingredients.map(ingredient => {
      let ingDetail = {};

      if (ingredient.ing) ingDetail.ing = ingredient.ing;
      if (ingredient.quantity) ingDetail.quantity = ingredient.quantity;
      if (ingredient.measurement)
        ingDetail.measurement = ingredient.measurement;

      recipeFields.ingredients.push(ingDetail);
    });
  }

  recipeFields.steps = [];
  if (req.body.steps) {
    req.body.steps.map(step => {
      let stepDetail = {};

      if (step.step) stepDetail.step = step.step;
      if (step.text) stepDetail.text = step.text;

      recipeFields.steps.push(stepDetail);
    });
  }

  Recipe.findOne({ name: req.body.name }).then(recipe => {
    if (recipe) {
      Recipe.findOneAndUpdate(
        { name: req.body.name },
        { $set: recipeFields },
        { new: true }
      ).then(recipe => res.json(recipe));
      // res.json({ msg: 'Recipe already exists' });
    } else {
      new Recipe(recipeFields).save().then(recipe => {
        return res.json(recipe);
      });
    }
  });
});

// @route   DELETE api/recipe
// @desc    Delete a recipe
// @access  Private
router.delete('/:id', (req, res) => {
  Recipe.findByIdAndDelete(req.params.id, (err, recipe) => {
    if (err) {
      console.log(err);
      errors.noRecipeToDelete = 'There is no recipe to delete';
      res.status(404).json(errors);
    } else {
      res.json(recipe);
    }
  });
});

module.exports = router;
