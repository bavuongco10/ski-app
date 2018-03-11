import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import middleware from './Middleware';
import rootReducer from './Reducers';

const initialState = {};

/**
 * Define port if needed: composeWithDevTools({ port: 8000 })
 */
const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'mm-test',
});

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, enhancer);

export default store;
