import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  };

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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <Button onClick={this.onSignOutClick} color="google plus">
          <Icon name="google" /> Sign Out
        </Button>
      );
    } else {
      return (
        <Button onClick={this.onSignInClick} color="google plus">
          <Icon name="google" /> Sign In
        </Button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
