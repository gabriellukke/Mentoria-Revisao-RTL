import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';
import About from './pages/About';
import Details from './pages/Details';
import Nav from './components/Nav';

import './App.css';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/list" component={List} />
          <Route exact path="/countries/:id" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
