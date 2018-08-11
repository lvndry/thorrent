import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './Movie.css';

export default class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
		this.renderOverview = this.renderOverview.bind(this);
	}

	renderOverview() {
		this.setState({ visible: !this.state.visible })
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

Movie.propTypes = {
	title: Proptypes.string,
	overview: Proptypes.string,
};

Movie.defaultProps = {
	title: '',
	overview: '',
};
