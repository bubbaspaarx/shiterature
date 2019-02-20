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
const url = `https://api.giphy.com/v1/gifs/random?api_key=MRlihNpsOyihzH2yxzUHYSzHNYd3eqXw&tag=&rating=G`
const gifs = []

export default class App extends Component {

  state = {
    gifs: []
  }
  
  getGifs = () => {
    for(const i of [1, 2, 3]) {
      fetch(url)
        .then(resp => resp.json())
        .then(data => gifs.push(data.data.image_url))
      }
    console.log(gifs)
  }

  routing = (path) => {
    history.push(path)
  }
  
  componentDidMount() {
    this.getGifs()
  }

  render() {
    return (
      <Router history={history} >
        <Fragment>
          <Route exact path='/' render={() => <Home routing={this.routing} /> } />
          <Route exact path='/welcome' render={() => <Welcome routing={this.routing} /> } />
          <Route exact path='/shiterature' render={() => <Shiterature routing={this.routing} gifs={gifs} /> } />
        </Fragment>
      </Router>
      );
    }
  }
