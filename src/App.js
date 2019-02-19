import React, { Component, Fragment } from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import logo from './rainbow-poo.svg';
import './App.css';

import Home from './containers/home'
import Welcome from './containers/welcome'
import Shiterature from './containers/shiterature'

const history = createHistory();  


class App extends Component {
  
  routing = (path) => {
    history.push(path)
  }

  render() {
    return (
      <Router history={history} >
        <Fragment>
          <Route exact path='/' render={() => <Home routing={this.routing} /> } />
          <Route exact path='/welcome' render={() => <Welcome routing={this.routing} /> } />
          <Route exact path='/shiterature' render={() => <Shiterature routing={this.routing} /> } />
        </Fragment>
      </Router>
      );
    }
  }

  export default App;
