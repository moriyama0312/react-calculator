import actions from './action';

export function displayValue(value) {
	return {
		type: actions.display,
		value
	};
}