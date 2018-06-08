import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Content from './Content';

class LandingPage extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		const { data } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title"> React Table</h1>
				</header>
				<Content />
			</div>
		);
	}
}

export default connect((state) => state)(LandingPage);
