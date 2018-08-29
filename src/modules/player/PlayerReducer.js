import PLAYER from './PlayerConstants';

const defaultState = {
	client: '',
};

export default function player(state = defaultState, action) {
	switch (action.type) {
	case PLAYER.INIT:
		return Object.assign({}, state, {
			client: action.payload.client,
		});

	default:
		return state;
	}
}
