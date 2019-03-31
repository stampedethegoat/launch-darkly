// React Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Components
import App from '../react/_Main/App';
import Header from '../react/_Main/Header';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' render={() => <Header><App /></Header>} />
      <Route path='/formula-one' render={() => <Header><FormulaOne /></Header>} />
      <Route path='stocks' render={() => <Header><Stocks /></Header>} />
    </Switch>
  </Router>, 
  document.querySelector('#root')
);