import {Collection} from 'backbone';
import Popularmovie from '../models/Popularmovie';

const 	API_KEY = 'a1adee5a5402f721c85e15e417a3b7f6',
		URL = 'https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY;

const Popularmovies = Collection.extend({
	model: Popularmovie,
	url: URL
})

export default Popularmovies;
