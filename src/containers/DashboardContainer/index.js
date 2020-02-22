import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard';

const mapStateToProps = (state) => ({
  macros: state.macros,
  location: state.router.location.pathname,
});

export default connect(mapStateToProps)(Dashboard);
