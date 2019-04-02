import React, { Component } from 'react';
import '../../assets/resources/grid.css'; 
import { Link } from 'react-router-dom';
import Hero from './Components/Hero';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
      </div>
    )
  }
}

export default App;