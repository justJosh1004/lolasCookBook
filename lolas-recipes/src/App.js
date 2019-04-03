import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import { Container } from 'semantic-ui-react';
import './App.css';

import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Home from './components/layout/Home';
import Recipes from './components/recipes/Recipes';
import Recipe from './components/recipes/Recipe';
import GoogleAuth from './components/auth/GoogleAuth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Container>
              <Header />
              <Nav />
              <Route exact path="/" component={Home} />
              <Route exact path="/recipes" component={Recipes} />
              <Route exact path="/recipes/:id" component={Recipe} />
              <Route exact path="/admin" component={GoogleAuth} />
            </Container>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
