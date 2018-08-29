import { push } from 'react-router-redux';

export function pusher(dispatch) {
	return function (url) {
		return dispatch(push(url));
	};
}
