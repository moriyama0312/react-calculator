function calculateReducer(state, action) {
	switch(action.type) {
		case 'DISPLAY_VALUE':
			return Object.assign({}, state, {
				inputValue: action.value,
				monitorValue: this.inputValue
			});
		default:
			return state
	}
};

export default calculateReducer;