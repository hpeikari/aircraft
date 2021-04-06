'use strict';
import { any } from 'prop-types';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import HomePage from '../views/HomePage/HomePage';
import { HOME_PAGE_ROUTE } from './routes';

const Routes = ({ history }) => (
  <Router history={history}>
    <Switch>
      {/* Home Page routes */}
      <Route exact path={`${HOME_PAGE_ROUTE}/`} component={HomePage} />

      {/* Redirect from any not-found route to home page */}
      <Redirect to={`${HOME_PAGE_ROUTE}/`} />
    </Switch>
  </Router>
);

Routes.propTypes = {
  history: any.isRequired
};

export default Routes;
