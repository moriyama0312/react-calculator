import App from './page/App';
import {connect} from 'react-redux';
import actionCreators from './actions/actionCreator';

function mapStateToProps(state) {
	return {
	};
}
function mapDispatchToProps(dispatch) {
	return {
		tapNum(number) {
			dispatch(actionCreators.displayValue(number));
		}
	};
}

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default AppContainer;