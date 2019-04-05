import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dimmer, Loader, List, Divider, Button } from 'semantic-ui-react';

import { getAllRecipes } from '../../actions/recipeActions';
import '../../css/Recipes.css';

class ManageRecipes extends Component {
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
          <div className="manage-recipes">
            <div className="admin-title">Manage the recipes:</div>
            <Link to="/admin/add-recipe">
              <Button fluid attached="top" color="green">
                Add Recipe
              </Button>
            </Link>
            <Divider hidden />
            <List divided verticalAlign="middle">
              {
                (recipeItems = recipes.map(recipe => (
                  <List.Item key={recipe._id}>
                    <List.Content floated="right">
                      <Button inverted color="orange">
                        Edit
                      </Button>
                      <Button inverted color="red">
                        Delete
                      </Button>
                    </List.Content>
                    <List.Content>{recipe.name}</List.Content>
                  </List.Item>
                )))
              }
            </List>
          </div>
        );
      }
    }

    return <div>{recipeItems}</div>;
  }
}

ManageRecipes.propTypes = {
  getAllRecipes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  recipe: state.recipe
});

export default connect(
  mapStateToProps,
  { getAllRecipes }
)(ManageRecipes);
