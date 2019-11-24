import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import List from './pages/Main/components/List';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/list" exact component={List} />
    </Switch>
  );
}

export default Routes;
