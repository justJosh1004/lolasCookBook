import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Dimmer, Loader, Segment } from 'semantic-ui-react';

import { getAllRecipes } from '../../actions/recipeActions';

class Recipes extends Component {
  componentDidMount = () => {
    this.props.getAllRecipes();
  };
  setLoader = () => {
    return (
      <Dimmer active inverted inline>
        <Loader size="massive">Loading Recipes...</Loader>
      </Dimmer>
    );
  };

  render() {
    const { recipe } = this.props;
    console.log(recipe);
    let recipeItems;

    if (recipe === null || recipe.loading) {
      recipeItems = this.setLoader();
    } else {
      recipeItems = <div>Put Recipes Here</div>;
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
