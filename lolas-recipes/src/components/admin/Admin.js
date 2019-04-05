import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  List,
  Button,
  Dimmer,
  Loader,
  Modal
} from 'semantic-ui-react';

import '../../css/Admin.css';

import { getAllRecipes } from '../../actions/recipeActions';
import GoogleAuth from '../auth/GoogleAuth';

class Admin extends Component {
  render() {
    if (this.props.isSignedIn) {
      return <div className="admin">Recipes will go here</div>;
    } else {
      return (
        <div className="admin">
          <p>Sign in with Google to manage recipes</p>
          <GoogleAuth />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  recipe: state.recipe
});

export default connect(
  mapStateToProps,
  { getAllRecipes }
)(Admin);
