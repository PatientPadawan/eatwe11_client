import { connect } from 'react-redux';

import { updateMeals } from '../MealsContainer/actions';
import { toggleModal } from './actions';
import Landing from '../../components/Landing';

const mapStateToProps = (state) => ({
  location: state.router.location.pathname,
  modal: state.modal.toggled,
});

const mapDispatchToProps = (dispatch) => ({
  updateMeals: (meals) => dispatch(updateMeals(meals)),
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
