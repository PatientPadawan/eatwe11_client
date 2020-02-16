import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard';

const mapStateToProps = (state) => ({ macros: state.macros });

export default connect(mapStateToProps)(Dashboard);
