import React, { Component } from 'react';

export class Recipe extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>This is a single recipe</h2>
      </div>
    );
  }
}

export default Recipe;
