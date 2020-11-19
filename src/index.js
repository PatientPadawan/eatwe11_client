import React from 'react';
import ParticlesBg from 'particles-bg';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faBurn,
  faChartPie,
  faCubes,
  faListUl,
  faPencilAlt,
  faTachometerAlt,
  faTint,
} from '@fortawesome/free-solid-svg-icons';

import store, { history } from './store';
import App from './App';
import './index.css';

library.add(
  faBurn, // calories
  faChartPie, // dashboard
  faCircle, // circle for icon background
  faCubes, // protein
  faListUl, // meals
  faPencilAlt, // assess
  faTachometerAlt, // carbohydrates
  faTint, // fats
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
    <ParticlesBg type="cobweb" bg={true} />
  </Provider>,
  document.getElementById('root'),
);
