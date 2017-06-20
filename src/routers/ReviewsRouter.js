import {Router} from 'backbone';

/**
 * Router for the movies URL's
 *
 * @constructor
 */
const ReviewsRouter = Router.extend({
    routes: {
        'reviews/:movieid/:moviename': 'reviewAction'
    },

    reviewAction: function(id, moviename) {
        App.events.trigger('newReviews', {
        	name: moviename
        });
    }
});

export default ReviewsRouter;
