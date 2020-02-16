import { connect } from 'react-redux';

import {
  updateMeals,
  toggleMeal,
} from './actions';
import MealsList from '../../components/MealsList';

const mapStateToProps = (state) => ({
  meals: state.meals,
  macros: state.macros,
});

const mapDispatchToProps = (dispatch) => ({
  updateMeals: (meals) => dispatch(updateMeals(meals)),
  toggleMeal: (uri) => dispatch(toggleMeal(uri)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealsList);
