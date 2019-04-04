import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';

import { signIn, signOut, authChange } from '../../actions/authActions';

class GoogleAuth extends Component {
  componentDidMount = () => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '562477915264-kf6p5s281956t0suklenqruhqjcpebm9.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.props.authChange();
          this.auth.isSignedIn.listen(this.props.authChange);
        });
    });
  };

  onSignInClick = () => {
    this.props.signIn();
  };

  onSignOutClick = () => {
    this.props.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <Button fluid onClick={this.onSignOutClick} color="google plus">
          <Icon name="google" /> Sign Out
        </Button>
      );
    } else {
      return (
        <Button fluid onClick={this.onSignInClick} color="google plus">
          <Icon name="google" /> Sign In
        </Button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(
  mapStateToProps,
  { signIn, signOut, authChange }
)(GoogleAuth);
