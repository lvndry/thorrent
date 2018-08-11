import { connect } from 'react-redux';
import { getMovies } from '../../modules/movies/MoviesActions';
import Home from './Home';

function mapStateToProps(state) {
	console.log(state.movies);
	return {
		movies: state.movies.movies,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getMovies() {
			return dispatch(getMovies());
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
