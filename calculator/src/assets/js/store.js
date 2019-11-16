import { createStore } from 'redux';
import test from './reducers/test';

const initialState = {
	value: 0
}

const store = createStore(test, initialState);

export default store;