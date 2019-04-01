import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Dimmer,
  Loader,
  Container,
  Header,
  Grid,
  Button
} from 'semantic-ui-react';

import { getRecipe } from '../../actions/recipeActions';
import Ingredients from './Ingredients';
import Steps from './Steps';

import '../../css/Recipes.css';

export class Recipe extends Component {
  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.getRecipe(this.props.match.params.id);
    }
  };

  setLoader = name => {
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
          <Container>
            <Link to="/recipes">
              <Button fluid color="orange">
                Back to Recipes
              </Button>
            </Link>
            <Header className="recipe-card card-header">
              <p>{recipe.name}</p>
            </Header>
            <Grid stackable divided>
              <Grid.Row stretched>
                <Grid.Column width={4}>
                  <Ingredients ingredients={recipe.ingredients} />
                </Grid.Column>
                <Grid.Column width={12}>
                  <Steps steps={recipe.steps} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        );
      }
    }
    return <div>{recipeItem}</div>;
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
