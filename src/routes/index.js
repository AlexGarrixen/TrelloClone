import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from '../components/layout/Header';
import Boards from '../pages/Boards';
import Board from '../pages/Board';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={Boards} />
      <Route exact path='/board/:boardId/:boardName' component={Board} />
      <Redirect to='/' />
    </Switch>
  </Router>
);

export default Routes;
