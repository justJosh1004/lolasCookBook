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
      <List key={ing.ing} animated relaxed divided>
        <List.Item>
          <List.Content key={ing.ing}>
            <List.Header style={{ fontFamily: 'Pompiere', fontSize: '25px' }}>
              {ing.ing}
            </List.Header>
            <List.Description style={{ fontSize: '25px' }}>
              {this.showingredientDetail(ing)}
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    ));

  render() {
    const { ingredients } = this.props;
    return (
      <div style={{ cursor: 'default' }}>
        <div style={{ fontSize: '30px', marginBottom: '1em' }}>
          Ingredients:
        </div>
        <Card.Description content={this.showIngredients(ingredients)} />
      </div>
    );
  }
}

export default Ingredients;
