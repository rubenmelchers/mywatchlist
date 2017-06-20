import {View} from 'backbone';
import ReviewsRouter from '../routers/ReviewsRouter';

import reviewsCollection from '../collections/reviewsCollection';
import Review from '../views/Review';

/**
 * Object representing the TeamLinks element
 *
 * @constructor
 */
const ReviewLinks = View.extend({
    router: null,

    events: {
        'click': 'clickHandler'
    },

    initialize: function () {

        //set the router
        this.router = new ReviewsRouter();
    },

    /**
     * Click handler for links, retrieve data attributes and navigate router
     *
     * @param e
     */
    clickHandler: function (e) {
        e.preventDefault();

        //Get target and retrieve data properties
        let target = e.currentTarget,
            id = target.dataset['movieid'],
            name = target.dataset['moviename'],
            url = 'reviews/' + id + '/' + name;

        //create new collection with the ID from the clicked link
        let reviewsList = new reviewsCollection([], { movie_id: id });

        //create new view for the reviews corresponding to the id
        new Review({el: "#reviews", collection: reviewsList});

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }
});

export default ReviewLinks;
