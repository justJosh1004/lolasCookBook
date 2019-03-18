import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import './App.css';

import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Home from './components/layout/Home';
import Recipes from './components/recipes/Recipes';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ marginTop: '20px' }}>
        <Router>
          <Container>
            <Header />
            <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={Recipes} />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
