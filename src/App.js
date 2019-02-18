import React, { Component, Router } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './rainbow-poo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <p>Hello</p>
      </Router>
    );
  }
}

export default App;
