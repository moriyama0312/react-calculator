import React from 'react';
import CalculatorTapNumber from '../components/CalculatorTapNumber';
import CalculatorTapOperator from '../components/CalculatorTapOperator';

class CalculatorTapArea extends React.Component {
	render() {
		return (
			<div className="calculator-tap">
				<form>
					<CalculatorTapNumber />
					<CalculatorTapOperator />
				</form>
			</div>
		);
	}
}

export default CalculatorTapArea;