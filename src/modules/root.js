import { combineReducers } from 'redux';
import movies from './movies/MoviesReducer';

export default combineReducers({
  movies,
});
