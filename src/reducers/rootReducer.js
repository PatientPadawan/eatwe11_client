const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVED_ALL_MEALS':
      return { ...state, meals: action.meals };
    case 'RECEIVED_ALL_MACROS':
      return { ...state, macros: action.macros };
    default: return state;
  }
};

export default rootReducer;
