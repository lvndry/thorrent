import request from 'superagent';
import config from '../config';

const base = 'https://api.themoviedb.org/3';

const URL = {
	POPULAR: `${base}/movie/popular`,
	SEARCH: `${base}/search/movie`,
	IMAGE: 'https://image.tmdb.org/t/p',
};

export function getMovies() {
	return request
		.get(URL.POPULAR)
		.query({ api_key: config.api_key })
		.then(response => JSON.parse(response.text));
}

export function getPoster(posterPath) {
	return request
		.get(`${URL.IMAGE}/w500/${posterPath}`)
		.query({ api_key: config.api_key })
		.then(response => response.text);
}

export function searchMovie(query) {
	return request
		.get(URL.SEARCH)
		.query({
			api_key: config.api_key,
			query,
		})
		.then(response => JSON.parse(response.text));
}
