import React from 'react';

class CalculatorTapNumber extends React.Component {
	render() {
		return (
			<ul className="calculator-tap__numbers">
				<li className="others" data-other-type="ac">AC</li>
				<li className="others" data-other-type="inversion">+/-</li>
				<li className="others" data-other-type="remainder">%</li>
				<li className="number" data-num="7">7</li>
				<li className="number" data-num="8">8</li>
				<li className="number" data-num="9">9</li>
				<li className="number" data-num="4">4</li>
				<li className="number" data-num="5">5</li>
				<li className="number" data-num="6">6</li>
				<li className="number" data-num="1">1</li>
				<li className="number" data-num="2">2</li>
				<li className="number" data-num="3">3</li>
				<li className="number double-column" data-num="0">0</li>
				<li className="dot" data-num=".">.</li>
			</ul>
		);
	}
}

export default CalculatorTapNumber;