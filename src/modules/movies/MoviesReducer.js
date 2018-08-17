import MOVIES from './MovieConstants';

const defaultState = {
	movies: [],
};

export default function movie(state = defaultState, action) {
	switch (action.type) {
	case MOVIES.FETCH_SUCCESS:
	case MOVIES.SEARCH_SUCCESS:
		return Object.assign({}, state, { movies: action.payload.movies });
	default:
		return state;
	}
}
