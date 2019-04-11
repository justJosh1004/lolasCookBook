import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Form, Button, Divider, List } from 'semantic-ui-react';
import { InputField, TextAreaField } from 'react-semantic-redux-form';

class RecipeForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(this.setStepNumber(formValues));
  };

  setStepNumber = formValues => {
    let updatedFormValues;
    let stepFix;

    if (formValues.steps) {
      stepFix = formValues.steps.map((step, index) => {
        return { ...step, steps: index + 1 };
      });
    }
    updatedFormValues = {
      name: formValues.name,
      ingredients: formValues.ingredients,
      steps: stepFix
    };
    return updatedFormValues;
  };

  stepNumberField = ({ input }) => {
    return <input style={{ display: 'none' }} {...input} />;
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

  renderAddSteps = ({ fields }) => (
    <List>
      <List.Item>
        <Button
          onClick={() => fields.push({})}
          type="button"
          fluid
          color="orange">
          Add Step
        </Button>
      </List.Item>
      {fields.map((step, index) => (
        <List.Item key={index}>
          <List.Content>
            <Button
              type="button"
              onClick={() => fields.remove(index)}
              floated="right"
              color="red">
              Remove Step
            </Button>
            <List.Header>Step #{index + 1}</List.Header>
            <Field
              name={`${step}.text`}
              component={TextAreaField}
              label="Step Instructions"
              placeholder="Describe this step"
              required
            />
            <Field
              name={`${step}.step`}
              component={this.stepNumberField}
              defaultValue={index + 1}
            />
          </List.Content>
        </List.Item>
      ))}
    </List>
  );

  render() {
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
        <FieldArray name="steps" component={this.renderAddSteps} />
        <Divider />
        <Button floated="right" color="olive">
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
