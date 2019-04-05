import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

import { newTab } from '../../actions/navActions';
import GoogleAuth from '../auth/GoogleAuth';

class Nav extends Component {
  componentDidMount = () => {
    if (window.location.pathname === '/recipes') {
      this.props.newTab('recipes');
    } else if (window.location.pathname === '/admin') {
      this.props.newTab('admin');
    }
  };

  handleItemClick = (e, { name }) => {
    this.props.newTab(name);
  };

  render() {
    const { activeItem } = this.props.activeItem;

    let renderLogout = this.props.isSignedIn ? (
      <Menu.Menu position="right">
        <Menu.Item>
          <GoogleAuth />
        </Menu.Item>
      </Menu.Menu>
    ) : null;

    return (
      <div>
        <Menu
          // attached="top"
          tabular
          borderless
          style={{ marginBottom: '20px' }}>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} // This is component Augmentation
            to="/recipes"
            name="recipes"
            active={activeItem === 'recipes'}
            onClick={this.handleItemClick}
          />
          {renderLogout}
        </Menu>
      </div>
    );
  }
}

Nav.propType = {
  newTab: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activeItem: state.activeItem,
  isSignedIn: state.auth.isSignedIn
});

export default connect(
  mapStateToProps,
  { newTab }
)(Nav);
