import { connect } from 'react-redux';

import { updateMacros } from './actions';
import AnthroQuiz from '../../components/AnthroQuiz';

const mapDispatchToProps = (dispatch) => ({
  updateMacros: (macros) => dispatch(updateMacros(macros)),
});

export default connect(null, mapDispatchToProps)(AnthroQuiz);
