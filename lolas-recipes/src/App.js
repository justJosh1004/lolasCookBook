import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';

import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Body from './components/layout/Body';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ marginTop: '20px' }}>
        <Container>
          <Header />
          <Nav />
          <Body />
        </Container>
      </div>
    );
  }
}

export default App;
