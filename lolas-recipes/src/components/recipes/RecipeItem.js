import React, { Component } from 'react';
import { Card, List, Grid } from 'semantic-ui-react';

class RecipeItem extends Component {
  showingredientDetail = ing => {
    if (ing.quantity && ing.measurement) {
      return (
        <p>
          {ing.quantity} {ing.measurement}
        </p>
      );
    }
  };

  showIngredients = ingredients =>
    ingredients.map(ing => (
      <List animated divided>
        <List.Item>
          <List.Content key={ing.ing}>
            <List.Header>{ing.ing}</List.Header>
            <List.Description>
              {this.showingredientDetail(ing)}
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    ));

  showSteps = steps =>
    steps.map(step => {
      return (
        <Grid key={step.step} columns="equal" verticalAlign="middle">
          <Grid.Column width={1}>
            <h1>{step.step}</h1>
          </Grid.Column>
          <Grid.Column width={15}>
            <div>{step.text}</div>
          </Grid.Column>
        </Grid>
      );
    });

  render() {
    const { recipe } = this.props;
    return (
      <Card fluid color="orange">
        <Card.Content>
          <Card.Header content={recipe.name} />
          <Grid>
            <Grid.Column width={5}>
              <h4>Ingredients:</h4>
              <Card.Description
                content={this.showIngredients(recipe.ingredients)}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              <h4>Steps:</h4>
              <Card.Description content={this.showSteps(recipe.steps)} />
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

export default RecipeItem;
