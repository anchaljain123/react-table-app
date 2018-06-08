import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import LandingPage from './LandingPage';

class App extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={LandingPage} />
				<Route path="/home*" component={Home} />
			</div>
		);
	}
}

export default App;
