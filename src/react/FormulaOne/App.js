import React, { Component } from 'react';
import '../../assets/resources/grid.css'; 
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="row">
        <Link to="/formula-one/2019-circuit">
          <div className="col span-1-of-2 img-formula-one img-option-small">
            Circuit
          </div>
        </Link>
        <Link to="/formula-one/2019-constructors">
          <div className="col span-1-of-2 img-formula-one img-option-small">
            Teams
          </div>
        </Link>
        <Link to="/formula-one/2019-constructors">
          <div className="col span-1-of-2 img-formula-one img-option-small">
            Drivers
          </div>
        </Link>
        <Link to="/formula-one/2019-schedule">
          <div className="col span-1-of-2 img-formula-one img-option-small">
            Schedule
          </div>
        </Link>
        <Link to="/formula-one/2018-standings">
          <div className="col span-1-of-2 img-formula-one img-option-small">
            2018 Standings
          </div>
        </Link>
        <Link to="/formula-one/2018-race-results">
          <div className="col span-1-of-2 img-formula-one img-option-small">
            2018 Race Results
          </div>
        </Link>
      </div>
    )
  }
}

export default App;