/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import List from './pages/Main/components/List';

const Routes = (props) => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route
      path="/list"
      exact
      render={() => (
        <List {...props} />
      )}
    />
  </Switch>
);

export default Routes;
