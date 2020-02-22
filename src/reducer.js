import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import meals from './containers/MealsContainer/reducer';
import macros from './containers/AnthropometricContainer/reducer';
import modal from './containers/LandingContainer/reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  meals,
  macros,
  modal,
});

export default createRootReducer;
