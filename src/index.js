import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './Containers/App/App.container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}
