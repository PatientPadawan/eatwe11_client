import {
  RECEIVED_ALL_MEALS,
  TOGGLE_MEAL,
} from './constants';

export const updateMeals = (meals) => ({
  type: RECEIVED_ALL_MEALS,
  meals,
});

export const toggleMeal = (uri) => ({
  type: TOGGLE_MEAL,
  uri,
});
