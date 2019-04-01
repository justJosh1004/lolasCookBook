import React, { Component } from 'react';
import { List, Card } from 'semantic-ui-react';

import '../../css/Recipes.css';

class Ingredients extends Component {
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
      <List key={ing.ing} animated relaxed divided>
        <List.Item>
          <List.Content key={ing.ing}>
            <List.Header className="ingredient-list-header">
              {ing.ing}
            </List.Header>
            <List.Description className="ingredient-list">
              {this.showingredientDetail(ing)}
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    ));

  render() {
    const { ingredients } = this.props;
    return (
      <div>
        <div className="card-detail-header">Ingredients:</div>
        <Card.Description content={this.showIngredients(ingredients)} />
      </div>
    );
  }
}

export default Ingredients;
