import { connect } from 'react-redux';
import { searchMovie, getMovies } from '../../modules/movies/MoviesActions';
import SearchBar from './SearchBar';

function mapStateToProps(state) {
	const { movies } = state.movies;
	return { movies };
}

function mapDispatchToProps(dispatch) {
	return {
		search(query) {
			dispatch(searchMovie(query));
		},
		getPopular() {
			dispatch(getMovies());
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
