import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getRecipe } from '../../actions/recipeActions';

export class Recipe extends Component {
  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.getRecipe(this.props.match.params.id);
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>This is a single recipe</h2>
      </div>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  getRecipe: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  recipe: state.recipe
});

export default connect(
  mapStateToProps,
  { getRecipe }
)(Recipe);
