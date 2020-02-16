import { connect } from 'react-redux';

import { updateMeals } from '../MealsContainer/actions';
import Landing from '../../components/Landing';

const mapDispatchToProps = (dispatch) => ({
  updateMeals: (meals) => dispatch(updateMeals(meals)),
});

export default connect(null, mapDispatchToProps)(Landing);
