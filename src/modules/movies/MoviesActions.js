import * as MovieClient from './MoviesClient';
import MOVIES from './MovieConstants';

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

export function searchMovie(search) {
	return function searchMovieThunk(dispatch) {
		return MovieClient.searchMovie(search)
			.then(movies => dispatch({
				type: MOVIES.SEARCH_SUCCESS,
				payload: { movies: movies.results },
			}));
	};
}
