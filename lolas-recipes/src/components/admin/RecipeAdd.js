import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class RecipeAdd extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div>Add a Recipe</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeAdd);
