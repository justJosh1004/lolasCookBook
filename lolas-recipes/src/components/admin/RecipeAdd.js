import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { createRecipe } from '../../actions/recipeActions';
import RecipeForm from './RecipeForm';

class RecipeAdd extends Component {
  onSubmit = formValues => {
    console.log(formValues);
    this.props.createRecipe(formValues);
  };

  render() {
    return (
      <div>
        <div className="admin-title">Add a Recipe</div>
        <Link to="/admin">
          <Button fluid attached="top" color="yellow">
            Go Back
          </Button>
        </Link>
        <div className="admin-subtitle">Create Recipe:</div>
        <RecipeForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { createRecipe }
)(RecipeAdd);
