import React, { Component } from 'react';
import { List, Card } from 'semantic-ui-react';

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
      <List key={ing.ing} animated divided>
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

  render() {
    const { ingredients } = this.props;
    return (
      <div>
        <h4>Ingredients:</h4>
        <Card.Description content={this.showIngredients(ingredients)} />
      </div>
    );
  }
}

export default Ingredients;
