import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider, connect } from 'react-redux';

function mapStateToProps(state) {
	return {
	};
}
function mapDispatchToProps(dispatch) {
	return {
	};
}
const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
