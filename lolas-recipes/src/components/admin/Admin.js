import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../css/Admin.css';

import GoogleAuth from '../auth/GoogleAuth';
import ManageRecipes from './ManageRecipes';

class Admin extends Component {
  render() {
    if (this.props.isSignedIn) {
      return (
        <div className="admin">
          <ManageRecipes />
        </div>
      );
    } else {
      return (
        <div className="admin">
          <p className="admin-title">Sign in with Google to manage recipes</p>
          <GoogleAuth />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps)(Admin);
