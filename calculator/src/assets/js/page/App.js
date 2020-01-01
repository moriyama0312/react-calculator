import React from 'react';
import '../../scss/main.scss';
import CalculatorResultArea from '../components/CalculatorResultArea';
import CalculatorTapArea from '../components/CalculatorTapArea';

class App extends React.Component {
	render() {
		return (
			<div className="calculator">
				<CalculatorResultArea
					displayValue={this.props.value}
				/>
				<CalculatorTapArea />
			</div>
		);
	}
}

export default App;
