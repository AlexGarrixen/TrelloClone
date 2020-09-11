import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from '../components/layout/Header';
import Boards from '../pages/Boards';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={Boards} />
      <Redirect to='/' />
    </Switch>
  </Router>
);

export default Routes;
