import React, { Component } from 'react';
import Proptypes from 'prop-types';

import { urlPusher } from '../../core/core';

import './Movie.css';

export default class Movie extends Component {
	static propTypes = {
		title: Proptypes.string,
		overview: Proptypes.string,
		poster_path: Proptypes.string,
		id: Proptypes.number,
	};

	static defaultProps = {
		title: '',
		overview: '',
		poster_path: '',
		id: '',
	};

	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
		this.renderOverview = this.renderOverview.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const url = `/${this.props.id}/play`;
		urlPusher(url);
	}

	renderOverview() {
		this.setState(prevState => ({ visible: !prevState.visible }));
	}

	render() {
		const {
			title,
			poster_path,
			overview,
		} = this.props;

		return (
			<div className='Movie'>
				<h3 className='Movie-title'>
					{title}
				</h3>
				<div
					className='Movie-attributes'
					onMouseEnter={this.renderOverview}
					onMouseLeave={this.renderOverview}
					onClick={this.handleClick}
					role='gridcell'
					tabIndex={0}
				>
					<img
						src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
						alt={title}
						className='Movie-image'
					/>
					<div className='Movie-description' style={{ display: this.state.visible ? 'block' : 'none' }}>
						<p className='Movie-description-text'>
							{overview}
						</p>
					</div>
				</div>
			</div>
		);
	}
}
