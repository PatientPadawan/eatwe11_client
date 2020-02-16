import {
  RECEIVED_ALL_MEALS,
  TOGGLE_MEAL,
} from './constants';

const meals = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_ALL_MEALS:
      return [...action.meals];
    case TOGGLE_MEAL:
      return {
        ...state,
        meals: state.meals.map((recipe) => {
          if (recipe.uri !== action.uri) {
            return recipe;
          }
          return {
            ...recipe,
            isActive: !recipe.isActive,
          };
        }),
      };
    default: return state;
  }
};

export default meals;
