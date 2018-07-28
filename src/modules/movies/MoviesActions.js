import * as MovieClient from './MoviesClient.js';

export function getMovies() {
	return MovieClient.getMovies()
		.then(movies => movies)
}
