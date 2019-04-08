import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Message, Divider } from 'semantic-ui-react';
import { InputField } from 'react-semantic-redux-form';

class RecipeForm extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <Message error content={error} />;
    }
  };

  isValid = ({ error, touched }) => {
    if (touched && error) {
      return false;
    } else if (touched) {
      return true;
    } else {
      return null;
    }
  };

  isInvalid = ({ error, touched, pristine }) => {
    if (touched && error) {
      return true;
    } else if (pristine) {
      return false;
    } else {
      return null;
    }
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <Form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="recipe-form">
        <Field
          component={InputField}
          name="recipeName"
          label="Name of the Recipe"
          placeholder="What is the name of this recipe?"
          required
        />
        <Button type="button" fluid color="orange">
          Add Ingredient
        </Button>
        <Divider />
        {/* Redirect back to admin page once done with the form */}
        <Button onClick={this.onSubmit} floated="right" color="olive">
          Add Recipe
        </Button>
      </Form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  return errors;
};

export default reduxForm({
  form: 'recipeForm',
  validate
})(RecipeForm);
