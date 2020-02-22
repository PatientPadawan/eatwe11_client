import {
  TOGGLE_MODAL,
} from './constants';

const initialState = {
  toggled: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        toggled: !state.toggled,
      };
    default: return state;
  }
};

export default modal;
