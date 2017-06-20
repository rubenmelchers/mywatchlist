import {Collection} from 'backbone';
import Upcomingmovie from '../models/Upcomingmovie';

const 	API_KEY = 'a1adee5a5402f721c85e15e417a3b7f6',
		URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY;

const Upcomingmovies = Collection.extend({
	model: Upcomingmovie,
	url: URL
})

export default Upcomingmovies;
