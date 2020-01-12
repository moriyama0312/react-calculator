import React from 'react';

class CalculatorTapNumber extends React.Component {
	render() {
		const numberData = [7, 8, 9, 4, 5, 6, 1, 2, 3];
		let numberList = [];
		for(let i = 0; i < numberData.length; i++) {
			numberList.push(<li className="number" onClick={(e) => clickHandler(e)} data-type={numberData[i]}>{numberData[i]}</li>);
		}
		const clickHandler = (e) => {
			const clickNum = e.target.getAttribute('data-type');
			this.props.tapNum(clickNum);
		}
		return (
			<ul className="calculator-tap__numbers">
				<li className="others" data-type="ac">AC</li>
				<li className="others" data-type="inversion">+/-</li>
				<li className="others" data-type="remainder">%</li>
				{numberList}
				<li className="number double-column" data-type="0">0</li>
				<li className="dot" data-type=".">.</li>
			</ul>
		);
	}
}

export default CalculatorTapNumber;