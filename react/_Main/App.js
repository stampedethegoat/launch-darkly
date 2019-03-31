import React, { Component } from 'react';
import FormulaOnePhoto from '../../assets/FormulaOne.jpg';
import StocksPhoto from '../../assets/StockMarket.jpg';
import '../../assets/grid.css'; 

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col span-1-of-3 img-formula-one">
          Formula One
        </div>
        <div className="col span-1-of-3 img-stocks">
          Stocks
        </div>
        <div className="col span-1-of-3 img-nba">
          NBA
        </div>
      </div>
    )
  }
}

export default App;
        // <img className="span-1-of-2 init-img" src={StocksPhoto} alt="Stocks"/>
        // <img className="span-1-of-2 init-img" src={FormulaOnePhoto} alt="FormulaOne"/>