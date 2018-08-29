import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { InputGroup } from '@blueprintjs/core';

import './SearchBar.css';

export default class SearchBar extends Component {
	static propTypes = {
		search: Proptypes.func,
		getPopular: Proptypes.func,
	};

	static defaultProps = {
		search: () => {},
		getPopular: () => {},
	};

	handleSearch(event) {
		const { value } = event.target;
		if (value) {
			this.props.search(value);
		} else {
			this.props.getPopular();
		}
	}

	render() {
		return (
			<InputGroup
				type='search'
				leftIcon='search'
				placeholder='Search...'
				onChange={event => this.handleSearch(event)}
				round
				large
			/>
		);
	}
}
