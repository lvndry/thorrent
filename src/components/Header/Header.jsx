import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBarContainer';

export default class Header extends Component {
	render() {
		return (
			<header>
				<SearchBar />
			</header>
		);
	}
}
