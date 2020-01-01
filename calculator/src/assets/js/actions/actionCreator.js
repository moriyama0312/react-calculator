import actions from './action';

export default function displayValue(value) {
	return {
		type: actions.display,
		value
	};
}