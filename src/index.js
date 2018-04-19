import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store from './Redux/Store';
import { history } from './Redux/Middleware';

import './index.css';
import Navigation from './Containers/Navigation/Navigation.container';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Navigation />
    </ConnectedRouter>
  </Provider>,
  target,
);

registerServiceWorker();

/**
 * Hot Module Replacement API
 */
if (module.hot) {
  module.hot.accept();
}
