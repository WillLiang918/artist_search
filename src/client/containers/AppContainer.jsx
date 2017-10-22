import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App.jsx';
import { search } from '../actions/SearchAction';

const AppContainer = props => <App {...props} />;

const mapStateToProps = state => ({
  artists: state.artists,
});

const mapDispatachToProps = dispatch => bindActionCreators({
  search,
}, dispatch);

export default connect(mapStateToProps, mapDispatachToProps)(AppContainer);
