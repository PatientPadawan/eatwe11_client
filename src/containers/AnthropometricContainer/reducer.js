import {
  RECEIVED_ALL_MACROS,
} from './constants';

const macros = (state = {}, action) => {
  switch (action.type) {
    case RECEIVED_ALL_MACROS:
      return { ...action.macros };
    default: return state;
  }
};

export default macros;
