import {Collection} from 'backbone';
import ReviewModel from '../models/ReviewModel';

const 	API_KEY = '?api_key=a1adee5a5402f721c85e15e417a3b7f6',
		URL = 'https://api.themoviedb.org/3/movie/';

const ReviewsCollection = Collection.extend({
	model: ReviewModel,
	initialize: function(models, options) {
		this.movie_id = options.movie_id
	},
	url: function() {

		//get the complete url at another moment
		return URL + this.movie_id + '/reviews' + API_KEY;
	}
})

export default ReviewsCollection;
