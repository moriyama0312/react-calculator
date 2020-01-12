import actions from './action';

export default {
	displayValue: (value) => {
		return {
			type: actions.display,
			value
		};
	}
}