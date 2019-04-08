import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form, Button, Message, Divider, List } from 'semantic-ui-react';
import { InputField } from 'react-semantic-redux-form';

class RecipeForm extends Component {
  state = {
    ingredients: [{ name: 'Chicken' }]
  };

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

  onAddIndgredientsClick = () => {
    this.setState({ ...this.state });
    console.log('Adding Ingredient');
    console.log(this.state);
  };

  renderAddIngredients = ({ fields }) => (
    <List>
      <List.Item>
        <Button
          onClick={() => fields.push({})}
          type="button"
          fluid
          color="orange">
          Add Ingredient
        </Button>
      </List.Item>
      {fields.map((ingredient, index) => (
        <List.Item key={index}>
          <List.Content>
            <Button
              type="button"
              onClick={() => fields.remove(index)}
              floated="right"
              color="red">
              Remove Ingredient
            </Button>
            <List.Header>Ingredient #{index + 1}</List.Header>
            <Field
              name={`${ingredient}.ing`}
              component={InputField}
              label="Ingredient Name"
              placeholder="What is the ingredient?"
              required
            />
            <Form.Group>
              <Field
                name={`${ingredient}.quantity`}
                component={InputField}
                label="Quantity"
                placeholder="How much?"
              />
              <Field
                name={`${ingredient}.measurement`}
                component={InputField}
                label="Measurement"
                placeholder="cups, lbs, kilos, tbps, etc."
              />
            </Form.Group>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );

  render() {
    console.log(this.props
      );
    return (
      <Form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="recipe-form">
        <Field
          component={InputField}
          name="name"
          label="Name of the Recipe"
          placeholder="What is the name of this recipe?"
          required
        />
        <FieldArray name="ingredients" component={this.renderAddIngredients} />

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
