import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

import GoogleAuth from '../auth/GoogleAuth';
import { newTab } from '../../actions/navActions';

class Nav extends Component {
  componentDidMount = () => {
    if (window.location.pathname !== '/') {
      this.props.newTab('recipes');
    }
  };

  handleItemClick = (e, { name }) => {
    this.props.newTab(name);
  };

  render() {
    const { activeItem } = this.props.activeItem;

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
          <Menu.Item
            // as={Link} // This is component Augmentation
            // to="/recipes"
            // name="recipes"
            // active={activeItem === 'recipes'}
            // onClick={this.handleItemClick}
            position="right">
            <GoogleAuth />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

Nav.propType = {
  newTab: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activeItem: state.activeItem
});

export default connect(
  mapStateToProps,
  { newTab }
)(Nav);
