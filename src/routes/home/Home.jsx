import React, { Component } from 'react';
import { getMovies } from '../../modules/movies/MoviesActions';
import Movie from '../../components/movie/Movie';
import './Home.css';

var WebTorrent = require('webtorrent')

var client = new WebTorrent()

export default class Home extends Component {
  constructor(props) {
    super(props);
		this.state = {
			movies: [],
		}
  }

	componentDidMount() {
		// getMovies()
		// .then(movies => this.setState({ movies: movies.results }))

		var magnetURI = 'magnet:?xt=urn:btih:5576b680bccc56ee5e3e937fbe5016f52f081931&tr=udp://eddie4.nl:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://tracker.leechers-paradise.org:6969/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=udp://tracker.coppersurfer.tk:6969/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://9.rarbg.com:2800/announce&tr=udp://9.rarbg.me:2780/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://p4p.arenabg.com:1337/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.vanitycore.co:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://ipv4.tracker.harry.lu:80/announce&tr=udp://explodie.org:6969/announce&tr=http://inferno.demonoid.ph:3389/announce'

		client.add(magnetURI, function(torrent) {
		  // Got torrent metadata!
		  console.log('Client is downloading:', torrent.infoHash)
			console.log(torrent);
		  torrent.files.forEach(function(file) {
		    // Display the file by appending it to the DOM. Supports video, audio, images, and
		    // more. Specify a container element (CSS selector or reference to DOM node).
				console.log(file);
		    file.appendTo('#root')
		  })
		})
		console.log(client);
	}

  render() {
		// {console.log(this.state.movies)}
    return (
      <div className='Home'>
				<header className='Home-header'>
					<h1 className='Home-header-title'>
						Thorrent
					</h1>
				</header>
				<main className='Home-movies'>
					{
						this.state.movies.map((movie, i) => <Movie key={i} {...movie} />)
					}
				</main>
			</div>
    );
  }
}
