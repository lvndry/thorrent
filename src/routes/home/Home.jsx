import React, { Component } from 'react';
import { getMovies } from '../../modules/movies/MoviesActions';

export default class Home extends Component {
  constructor(props) {
    super(props);
		this.state = {
			movies: [],
		}
  }

	componentDidMount() {
		getMovies()
		.then(movies => this.setState({ movies: movies.results }))
	}

  render() {
		console.log(this.state.movies);
    return (
      <div>
				<header className='Home-header'>
					<div className='Home-header-title'>
						Thor
					</div>
				</header>
				<main>
					{/* <Videos {...this.props} /> */}
					{ this.state.movies.map(movie => movie.title ) }
				</main>
			</div>
    );
  }
}
