import {
  RECEIVED_ALL_MEALS,
  TOGGLE_MEAL,
} from './constants';

const meals = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_ALL_MEALS:
      return [...action.meals];
    case TOGGLE_MEAL:
      return state.map((el) => {
        if (el.recipe.uri !== action.uri) {
          return el;
        }
        return {
          ...el,
          isActive: !el.isActive,
        };
      });
    default: return state;
  }
};

export default meals;
