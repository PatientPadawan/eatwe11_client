/*

import MealsService from '../../services/meals-service';
import { updateMeals } from '../../containers/MealsContainer/actions';

*/

/* WORK IN PROGRESS DELETE IF NOT USED

export const getDemo = () => async (dispatch) => {
  let response;
  try {
    const res = await MealsService.getDemo();
    response = await res.hits.map((obj) => ({ ...obj, isActive: false }));
    dispatch(updateMeals(response));
  } catch (err) {
    console.error("Failed to fetch 'demo' data", err);
  }
};

*/
