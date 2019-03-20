import React, { Component } from 'react';
import { Card, List } from 'semantic-ui-react';

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

  showIngredients = ingredients => (
    <List animated relaxed>
      <List.Item>
        {ingredients.map(ing => (
          <List.Content key={ing.ing}>
            <List.Header>{ing.ing}</List.Header>
            <List.Description>
              {this.showingredientDetail(ing)}
            </List.Description>
          </List.Content>
        ))}
      </List.Item>
    </List>
  );

  showSteps = steps => (
    <div>
      {steps.map(step => (
        <p key={step.step}>{step.text}</p>
      ))}
    </div>
  );

  render() {
    const { recipe } = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Header content={recipe.name} />
          <h4>Ingredients:</h4>
          <Card.Description
            content={this.showIngredients(recipe.ingredients)}
          />
          <h4>Steps:</h4>
          <Card.Description content={this.showSteps(recipe.steps)} />
        </Card.Content>
      </Card>
    );
  }
}

export default RecipeItem;
