import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

export default class Nav extends Component {
  state = {
    activeItem: 'home'
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu
          attached="top"
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
        </Menu>
      </div>
    );
  }
}
