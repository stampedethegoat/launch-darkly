// React Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Components
import Header from '../react/Header'
import LaunchDarkly from '../react/LaunchDarkly';
import FormulaOne from '../react/FormulaOne/App';
import Stocks from '../react/Stocks/App';
import NBA from '../react/NBA/App';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' render={() => <Header><LaunchDarkly /></Header>} />
      <Route path='/formula-one' render={() => <Header><FormulaOne /></Header>} />
      <Route path='/stocks' render={() => <Header><Stocks /></Header>} />
      <Route path='/nba' render={() => <Header><NBA /></Header>} />
    </Switch>
  </Router>, 
  document.querySelector('#root')
);