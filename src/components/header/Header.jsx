import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBarContainer';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<header className='header-container'>
				<SearchBar />
			</header>
		);
	}
}
