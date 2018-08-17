import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Share from './routes/share/Share';
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Share} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
