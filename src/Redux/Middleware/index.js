import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import promiseMiddleware from 'redux-promise-middleware';

export const history = createHistory();

const defaultMiddleware = [
  thunk,
  promiseMiddleware(),
  routerMiddleware(history),
];

export default [...defaultMiddleware];
