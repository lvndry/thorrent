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
		var magnetURI = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'

		client.add(magnetURI, (torrent) => {
		  console.log('Client is downloading:', torrent.infoHash)
			console.log(torrent);
		  torrent.files.forEach(function(file) {
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
