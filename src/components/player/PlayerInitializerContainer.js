import { connect } from 'react-redux';
import PlayerInitializer from './PlayerInitializer';
import { setTorrentClient } from '../../modules/player/PlayerActions';

const mapDispatchToProps = dispatch => ({
	setTorrentClient(client) {
		dispatch(setTorrentClient(client));
	},
});

export default connect(null, mapDispatchToProps)(PlayerInitializer);
