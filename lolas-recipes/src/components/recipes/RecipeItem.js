import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';

import Ingredients from './Ingredients';
// import Steps from './Steps';

class RecipeItem extends Component {
  render() {
    const { recipe } = this.props;
    console.log(recipe);
    return (
      <Card style={{ cursor: 'default' }}>
        <Card.Content>
          <Card.Header>
            <div
              style={{
                fontFamily: '"Sacramento", cursive',
                fontSize: '40px',
                fontWeight: '300',
                lineHeight: '1em',
                textAlign: 'center'
              }}>
              {recipe.name}
            </div>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Ingredients ingredients={recipe.ingredients} />
          {/* <Grid.Column width={11}>
              <Steps steps={recipe.steps} />
            </Grid.Column> */}
        </Card.Content>
        <Link to={`/recipes/${recipe._id}`}>
          <Button fluid color="orange" attached="bottom">
            View Recipe
          </Button>
        </Link>
      </Card>
    );
  }
}

export default RecipeItem;
