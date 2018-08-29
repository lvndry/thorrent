import { combineReducers } from 'redux';
import movies from './movies/MoviesReducer';
import player from './player/PlayerReducer';

export default combineReducers({
	movies,
	player,
});
