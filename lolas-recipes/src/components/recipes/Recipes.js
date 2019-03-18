import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAllRecipes } from '../../actions/recipeActions';

class Recipes extends Component {
  componentDidMount = () => {
    this.props.getAllRecipes();
  };

  render() {
    return (
      <div>
        <h1>Recipes Working!</h1>
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
