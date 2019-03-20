import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class RecipeItem extends Component {
  showIngredients = ingredients => (
    <div>
      {ingredients.map(ing => (
        <p key={ing.ing}>{ing.ing}</p>
      ))}
    </div>
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
