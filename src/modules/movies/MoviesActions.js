import * as MovieClient from './MoviesClient';
import { MOVIES } from './MovieConstants';

export function getMovies() {
	return function getMovieThunk(dispatch) {
		return MovieClient.getMovies()
			.then(movies => dispatch({
				type: MOVIES.FETCH_SUCCESS,
				payload: { movies: movies.results },
			}));
	};
}

export function getPoster(urlPath) {
	return function getPosterThunk() {
		return MovieClient.getPoster(urlPath);
	};
}
