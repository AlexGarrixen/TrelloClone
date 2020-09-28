import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Header = lazy(() => import('../components/layout/Header'));
const Boards = lazy(() => import('../pages/Boards'));
const Board = lazy(() => import('../pages/Board'));

const Routes = () => (
  <Router>
    <Suspense fallback={<div />}>
      <Header />
      <Switch>
        <Route exact path='/' component={Boards} />
        <Route exact path='/board/:boardId/:boardName' component={Board} />
        <Redirect to='/' />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
