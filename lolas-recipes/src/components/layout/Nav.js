import React, { Component } from 'react';
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
        <Menu attached="top" tabular borderless>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="recipes"
            active={activeItem === 'recipes'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}
