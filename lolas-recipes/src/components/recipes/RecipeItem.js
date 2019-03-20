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
  render() {
    const { recipe } = this.props;
    return (
      <Card>
        <Card.Content>
          {/* <Card.Header content="A recipe!" /> */}
          <Card.Header content={recipe.name} />
          <h4>Ingredients:</h4>
          <Card.Description
            content={this.showIngredients(recipe.ingredients)}
          />
          {/* <Card.Description content={recipe.steps} /> */}
        </Card.Content>
      </Card>
    );
  }
}

export default RecipeItem;
