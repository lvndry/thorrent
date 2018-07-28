import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home.jsx';

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Route path='/' exact component={Home} />
				{ /* <Route path='/video/:id' component={video} /> */ }
			</Router>
		);
	}
}
