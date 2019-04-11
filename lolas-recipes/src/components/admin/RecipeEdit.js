import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecipe, createRecipe } from '../../actions/recipeActions';
import RecipeForm from './RecipeForm';
import { Dimmer, Loader, Button } from 'semantic-ui-react';

class RecipeEdit extends Component {
  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.createRecipe(formValues, this.props.history);
  };

  setLoader = () => {
    return (
      <Dimmer active inverted>
        <Loader size="massive">Loading Recipe...</Loader>
      </Dimmer>
    );
  };

  render() {
    const { recipe, loading } = this.props.recipe;
    let recipeItem;

    if (recipe === null || loading) {
      recipeItem = this.setLoader();
    } else {
      if (recipe) {
        return (
          <div>
            <div className="admin-title">Add a Recipe</div>
            <Link to="/admin">
              {/* Check to see if the form was touched. Ask if they want to save changes */}
              <Button fluid attached="top" color="yellow">
                Go Back
              </Button>
            </Link>
            <div className="admin-subtitle">Create Recipe:</div>
            <RecipeForm
              initialValues={_.pick(recipe, 'name', 'ingredients', 'steps')}
              onSubmit={this.onSubmit}
            />
          </div>
        );
      }
    }

    return <div>{recipeItem}</div>;
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

export default connect(
  mapStateToProps,
  { getRecipe, createRecipe }
)(RecipeEdit);
