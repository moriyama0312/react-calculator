import React from 'react';

class CalculatorTapOperator extends React.Component {
	render() {
		return(
			<ul className="calculator-tap__operators">
				<li className="operator" data-op-type="div">÷</li>
				<li className="operator" data-op-type="multi">×</li>
				<li className="operator" data-op-type="subtraction">-</li>
				<li className="operator" data-op-type="addition">+</li>
				<li className="operator" data-op-type="equal">=</li>
			</ul>
		);
	}
}

export default CalculatorTapOperator;