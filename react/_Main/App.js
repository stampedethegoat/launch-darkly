import React, { Component } from 'react';
import '../../assets/resources/grid.css'; 
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="row">
        <Link to="/formula-one">
          <div className="col span-1-of-3 img-formula-one">
              F1
          </div>
        </Link>
        <Link to="/stocks">
          <div className="col span-1-of-3 img-stocks">
              Stocks
          </div>
        </Link>
        <Link to="/nba">
          <div className="col span-1-of-3 img-nba">
              NBA
          </div>
        </Link>
      </div>
    )
  }
}

export default App;