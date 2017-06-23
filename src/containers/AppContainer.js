import { connect } from 'react-redux';
import * as action from '../actions/index';
import App from '../components/App';
import { bindActionCreators } from 'redux';

function mapStateToProps (state) {
  return {
    isPinging: state.pingpong.isPinging
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(action, dispatch);
}

const AppWithData = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppWithData;
