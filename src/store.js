import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import initialState from './datastore';
import rootReducer from './reducer';

export const history = createBrowserHistory();

const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
];

/* eslint-disable no-underscore-dangle */
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}
/* eslint-enable */

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers,
);

export default store;
