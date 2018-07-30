import * as MovieClient from './MoviesClient.js';

export function getMovies() {
	return MovieClient.getMovies()
		.then(movies => movies)
}

export function getPoster(urlPath) {
	return MovieClient.getPoster(urlPath)
		.then(poster => poster)
}
