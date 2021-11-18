import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const OrderHistory = loadable(() => import('./OrderHistory'));

const Pages: FC = () => {
  return (
    <Switch>
      <Route exact path="/orderHistory" component={OrderHistory} />
      <Route path="*">
        <Redirect to="/orderHistory" />
      </Route>
    </Switch>
  );
};

export default Pages;
