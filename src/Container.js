import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';
import App from './App';

class Container extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<App />
			</Router>
		);
	}
}

export default Container;
