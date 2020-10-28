import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ChessHome from './Home/ChessHome';
import ChooseColor from './Home/chooseColor';
import Game from './Game/Game';


export default class App extends Component {
  static displayName = App.name;

  render () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ChessHome} />
        <Route path='/colorChoice' component={ChooseColor} />
        <Route path='/game' component={Game}/>
      </Switch>
    </Router>
    );
  }
}
