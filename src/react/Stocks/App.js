import React, { Component } from 'react';
import '../../assets/resources/grid.css'; 
import '../../init/init.css'; 
import { Link } from 'react-router-dom';
import Hero from './Components/Hero';

class App extends Component {
  render() {
    return (
      <div className="fade-in">
        <Hero />
      </div>
    )
  }
}

export default App;