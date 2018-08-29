import { pusher } from './url/URLUtils';

import store from '../store';

const { dispatch } = store;

const urlPusher = (pusher)(dispatch);

export { urlPusher };
