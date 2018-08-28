import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Mindful Blurb Journal</h1>
        </header>
        <div className="blurb-collection">
          <h3>`Blurbs for ${date}`</h3> 
          <p>Collection of a days blurbs here</p>
        </div>
      </div>
    );
  }
}

export default App;
