import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../App/App.container';
import NotFound from '../NotFound/NotFound.container';
// import Home from '../Home/Home.container';
// import HeaderReact from '../../Components/HeaderReact/HeaderReact.component';

const Navigation = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route component={NotFound} />
  </Switch>
);
export default Navigation;
