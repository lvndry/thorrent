import request from 'superagent';
import config from '../config.js'

const base = 'https://api.themoviedb.org/3';

const URL = {
		'POPULAR': base + '/movie/popular',
		'IMAGE': 'https://image.tmdb.org/t/p'
}

export function getMovies() {
	return request
		.get(URL.POPULAR)
		.query({ api_key: config.api_key  })
		.then(response => JSON.parse(response.text))
}

export function getPoster(posterPath) {
	return request
		.get(URL.IMAGE + '/w500/' + posterPath)
		.query({ api_key: config.api_key  })
		.then(response => response.text)
}
