import PLAYER from './PlayerConstants';

export function setTorrentClient(client) {
	return function (dispatch) {
		return dispatch({
			type: PLAYER.INIT,
			payload: { client },
		});
	};
}
