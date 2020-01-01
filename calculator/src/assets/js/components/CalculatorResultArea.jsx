import React from 'react';

class CalculatorResultArea extends React.Component {
	render() {
		return (
			<div className="calculator-result">
				<div className="calculator-result__inner">
					<span>{this.props.displayValue}</span>
				</div>
			</div>
		);
	}
}

export default CalculatorResultArea;