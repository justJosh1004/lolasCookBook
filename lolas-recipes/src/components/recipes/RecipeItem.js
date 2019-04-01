import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';

import Ingredients from './Ingredients';
import '../../css/Recipes.css';

class RecipeItem extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <Card centered className="recipe-card">
        <Card.Content>
          <Card.Header>
            <div className="card-header">{recipe.name}</div>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Ingredients ingredients={recipe.ingredients} />
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
