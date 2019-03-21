import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Dimmer, Loader } from 'semantic-ui-react';

import { getAllRecipes } from '../../actions/recipeActions';
import RecipeItem from './RecipeItem';

class Recipes extends Component {
  componentDidMount = () => {
    this.props.getAllRecipes();
  };
  setLoader = () => {
    return (
      <Dimmer active inverted>
        <Loader size="massive">Loading Recipes...</Loader>
      </Dimmer>
    );
  };

  render() {
    const { recipes, loading } = this.props.recipe;
    let recipeItems;

    if (recipes === null || loading) {
      recipeItems = this.setLoader();
    } else {
      if (recipes.length > 0) {
        return (
          <div style={{ marginTop: '10px', textAlign: 'left' }}>
            <Card.Group>
              {
                (recipeItems = recipes.map(recipe => (
                  <RecipeItem key={recipe._id} recipe={recipe} />
                )))
              }
            </Card.Group>
          </div>
        );
      }
    }

    return <div>{recipeItems}</div>;
  }
}

Recipes.propTypes = {
  getAllRecipes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  recipe: state.recipe
});

export default connect(
  mapStateToProps,
  { getAllRecipes }
)(Recipes);
