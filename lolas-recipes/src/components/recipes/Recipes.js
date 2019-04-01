import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Grid } from 'semantic-ui-react';

import { getAllRecipes } from '../../actions/recipeActions';
import RecipeItem from './RecipeItem';
import ComingSoon from './RecipeComingSoon';
import '../../css/Recipes.css';

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
          <div>
            <Grid container stackable centered columns="equal">
              {
                (recipeItems = recipes.map(recipe => (
                  <Grid.Column key={recipe._id}>
                    <RecipeItem recipe={recipe} />
                  </Grid.Column>
                )))
              }
            </Grid>
            <h3>More recipes coming soon</h3>
            <Grid container doubling centered columns={4}>
              <Grid.Column>
                <ComingSoon />
              </Grid.Column>
              <Grid.Column>
                <ComingSoon />
              </Grid.Column>
              <Grid.Column>
                <ComingSoon />
              </Grid.Column>
            </Grid>
          </div>
        );
      }
    }

    return (
      <div>
        <div>{recipeItems}</div>
      </div>
    );
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
