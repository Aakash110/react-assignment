import React, { Component } from 'react';
import './App.css';
import CandidateList from './candidate-list/candidate-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
   };
  }
  componentDidMount() {
    let initialPlanets = [];
    fetch('http://localhost:3010/candidates')
        .then(response => {
            return response.json();
        }).then(data => {
        initialPlanets = data.map((planet) => {
            return planet
        });
        console.log(initialPlanets);
        this.setState({
            planets: initialPlanets,
        });
    });
}
  render() {
    return (
      <CandidateList state={this.state}/>
    );
  }
}

export default App;
