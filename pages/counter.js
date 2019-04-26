import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}

	upCount = (e) => {
		e.preventDefault();
		this.setState(function (prevState) {
			return {
				count: prevState.count + 1
			}
		})
	};

	downCount = (e) => {
		e.preventDefault();
		this.setState(function (prevState) {
			if ( prevState.count >= 1 ) {
				return {
					count: prevState.count - 1
				}
			}
		})
	};

	resetCount = (e) => {
		e.preventDefault();
		this.setState(
			{ count: 0 }
		);
	};


	render() {
		return (
			<div className="counter">
				<div className="count">{this.state.count}</div>
				<div className="buttons">
					<a href="#" onClick={this.upCount} className="up">+</a>
					<a href="#" onClick={this.downCount} className="down">-</a>
					<a href="#" onClick={this.resetCount} className="reset">C</a>
				</div>
			</div>
		)
	}
}

export default Counter