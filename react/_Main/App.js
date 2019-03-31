import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/resources/grid.css'; 
import { withLDConsumer } from 'ldclient-react';

class App extends Component {
  render() {
  console.log(this.props);
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

export default withLDConsumer()(App);