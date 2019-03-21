import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';

import Ingredients from './Ingredients';
import Steps from './Steps';

class RecipeItem extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <Card fluid color="orange">
        <Card.Content>
          <Card.Header content={recipe.name} />
          <Grid>
            <Grid.Column width={5}>
              <Ingredients ingredients={recipe.ingredients} />
            </Grid.Column>
            <Grid.Column width={11}>
              <Steps steps={recipe.steps} />
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

export default RecipeItem;
