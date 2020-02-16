import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import meals from './containers/MealsContainer/reducer';
import macros from './containers/AnthropometricContainer/reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  meals,
  macros,
});

export default createRootReducer;
