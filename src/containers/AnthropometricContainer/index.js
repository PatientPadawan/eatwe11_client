import { connect } from 'react-redux';

import { updateMacros } from './actions';
import AnthroQuiz from '../../components/AnthroQuiz';

const mapStateToProps = (state) => ({
  location: state.router.location.pathname,
});

const mapDispatchToProps = (dispatch) => ({
  updateMacros: (macros) => dispatch(updateMacros(macros)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnthroQuiz);
