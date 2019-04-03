import React, { Component } from 'react';
import '../../assets/resources/grid.css'; 
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="home-row">
        <Link to="/formula-one">
          <div className="col span-1-of-2 img-formula-one img-option fade-in">
            Formula One
          </div>
        </Link>
        <Link to="/stocks">
          <div className="col span-1-of-2 img-stocks img-option fade-in">
              Stocks
          </div>
        </Link>
        <Link to="/nba">
          <div className="col span-1-of-2 img-nba img-option fade-in">
              NBA
          </div>
        </Link>
        <Link to="/omni">
          <div className="col span-1-of-2 img-omni img-option fade-in">
          OmniFood
          </div>
        </Link>
      </div>
    )
  }
}

export default App;