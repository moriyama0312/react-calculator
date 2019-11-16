import React from 'react';

class CalculatorTapOperator extends React.Component {
	render() {
		return(
			<ul className="calculator-tap__operators">
				<li className="operator">÷</li>
				<li className="operator">×</li>
				<li className="operator">-</li>
				<li className="operator">+</li>
				<li className="operator">=</li>
			</ul>
		);
	}
}

export default CalculatorTapOperator;