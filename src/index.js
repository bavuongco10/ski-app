import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store from './Redux/Store';
import { history } from './Redux/Middleware';

import './index.css';
import App from './Containers/App/App.container';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
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
