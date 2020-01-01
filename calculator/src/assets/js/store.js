import { createStore } from 'redux';
import calculateReducer from './reducers/calculate';

const initialState = {
	monitorValue: 0,
	inputValue: 0,
	saveValue: 0,
	operator: ''
}

const store = createStore(calculateReducer, initialState);

export default store;