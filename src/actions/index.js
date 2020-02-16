export const updateMacros = (macros) => ({
  type: 'RECEIVED_ALL_MACROS',
  macros,
});

export const updateMeals = (meals) => ({
  type: 'RECEIVED_ALL_MEALS',
  meals,
});

export const toggleMeal = (uri) => ({
  type: 'TOGGLE_MEAL',
  uri,
});


// DELETE ALL DESE
