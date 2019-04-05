import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

class RecipeAdd extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <Link to="/admin">
          <Button fluid color="yellow">
            Go Back
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeAdd);
