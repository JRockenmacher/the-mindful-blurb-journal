import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';
import BlurbContainer from './components/BlurbContainer'
import BlurbForm from './components/BlurbForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "The Mindful Blurb",
    }
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title}/>
        <section className="blurb-collection">
          <h3>`Blurbs for date`</h3> 
          <p>Collection of a days blurbs here</p>
          <BlurbContainer />
          <BlurbForm />
        </section>
      </div>
    );
  }
}

export default App;
