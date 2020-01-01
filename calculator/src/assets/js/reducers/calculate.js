function calculateReducer(state, action) {
	switch(action.type) {
		case 'DISPLAY_VALUE':
			return Object.assign({}, state, {
				monitorValue: inputValue,
				inputValue: action.value
			});
		default:
			return state
	}
};

export default calculateReducer;