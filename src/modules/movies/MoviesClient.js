import request from 'superagent';
import config from '../config.js'

const base = 'https://api.themoviedb.org/3';

const URL = {
		'POPULAR': base + '/movie/popular',
}

export function getMovies() {
	return request
		.get(URL.POPULAR)
		.query({ api_key: config.api_key  })
		.then(response => JSON.parse(response.text))
}
