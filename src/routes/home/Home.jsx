import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Movie from '../../components/movie/Movie';
import './Home.css';

const WebTorrent = require('webtorrent');

const client = new WebTorrent();

export default class Home extends Component {
	static propTypes = {
		getMovies: Proptypes.func,
		movies: Proptypes.array,
	}

	static defaultProps = {
		getMovies: () => {},
		movies: {},
	};

	componentDidMount() {
		this.props.getMovies();
		const magnetURI = 'magnet:?xt=urn:btih:5576b680bccc56ee5e3e937fbe5016f52f081931&tr=udp://eddie4.nl:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://tracker.leechers-paradise.org:6969/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=udp://tracker.coppersurfer.tk:6969/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://9.rarbg.com:2800/announce&tr=udp://9.rarbg.me:2780/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://p4p.arenabg.com:1337/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.vanitycore.co:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://ipv4.tracker.harry.lu:80/announce&tr=udp://explodie.org:6969/announce&tr=http://inferno.demonoid.ph:3389/announce';

		client.add(magnetURI, (torrent) => {
			console.log('Client is downloading:', torrent.infoHash);
			console.log(torrent);
			const file = torrent.files.find((file) => {
				return file.name.endsWith('.mp4')
			});
			console.log(file);
		})
		client.on('error', (err) => {
			console.log(err);
		});
		console.log(client);
	}

	renderMovies() {
		const { movies } = this.props;
		if (movies) {
			return movies.map(movie => <Movie key={movie.id} {...movie} />);
		}
		return null;
	}

	render() {
		return (
			<div className='Home'>
				<header className='Home-header'>
					<h1 className='Home-header-title'>
						Thorrent
					</h1>
				</header>
				<main className='Home-movies'>
					{this.renderMovies()}
				</main>
			</div>
		);
	}
}
