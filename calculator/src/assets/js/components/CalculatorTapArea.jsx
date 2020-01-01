import React from 'react';
import CalculatorTapNumber from '../components/CalculatorTapNumber';
import CalculatorTapOperator from '../components/CalculatorTapOperator';

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