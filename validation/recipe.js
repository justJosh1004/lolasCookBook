const Validator = require('validator');

const isEmpty = require('./is-empty');

module.exports = function validateRecipeInput(data) {
  console.log('Data sent to validation: ', data);
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.ing = !isEmpty(data.ing) ? data.ing : '';
  data.text = !isEmpty(data.text) ? data.text : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'A recipe name is required';
  }

  if (Validator.isEmpty(data.ing)) {
    errors.ing = 'An ingredient is required';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'A description of the step is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
