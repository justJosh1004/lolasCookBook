import React, { Component } from 'react';
import GoogleAuth from '../auth/GoogleAuth';

class Admin extends Component {
  render() {
    return (
      <div>
        <GoogleAuth />
        <h1>Admin</h1>
      </div>
    );
  }
}

export default Admin;
