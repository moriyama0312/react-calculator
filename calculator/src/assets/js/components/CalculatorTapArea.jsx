import React from 'react';

class CalculatorTapArea extends React.Component {
	render() {
		return (
			<div className="calculator-tap">
				<CalculatorTapNumber />
				<CalculatorTapOperator />
			</div>
		);
	}
}

export default CalculatorTapArea;