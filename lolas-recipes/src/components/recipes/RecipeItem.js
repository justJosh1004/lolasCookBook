import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import Ingredients from './Ingredients';
// import Steps from './Steps';

class RecipeItem extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <Card color="orange" style={{ cursor: 'default' }}>
        <Card.Content>
          <Card.Header content={recipe.name} />
          <Ingredients ingredients={recipe.ingredients} />
          {/* <Grid.Column width={11}>
              <Steps steps={recipe.steps} />
            </Grid.Column> */}
        </Card.Content>
      </Card>
    );
  }
}

export default RecipeItem;
