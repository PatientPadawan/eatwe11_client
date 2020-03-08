import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBurn,
  faCubes,
  faTachometerAlt,
  faTint,
} from '@fortawesome/free-solid-svg-icons';

import store, { history } from './store';
import App from './App';
import './index.css';

library.add(
  faBurn, // calories
  faCubes, // protein
  faTachometerAlt, // carbohydrates
  faTint, // fats
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
