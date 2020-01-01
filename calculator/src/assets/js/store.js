import { createStore } from 'redux';
import test from './reducers/test';

const initialState = {
	monitorValue: 0,
	inputValue: 0,
	saveValue: 0,
	operator: ''
}

const store = createStore(test, initialState);

export default store;