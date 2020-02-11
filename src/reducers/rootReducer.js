const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVED_ALL_MEALS':
      return { ...state, meals: action.meals };
    case 'RECEIVED_ALL_MACROS':
      return { ...state, macros: action.macros };
    case 'TOGGLE_MEAL':
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

export default rootReducer;
