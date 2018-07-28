import { connect } from 'react-redux';
import { getMovies } from '../../modules/movies/MoviesActions';
import Home from './Home.jsx';

function mapDispatchToProps(dispatch) {
	return {
		getMovies() {
			getMovies()
		},
	}
}

export default connect(null, mapDispatchToProps)(Home)
