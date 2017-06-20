import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

/**
 * Object representing the TeamLinks element
 *
 * @constructor
 */
 const Review = View.extend({
    templateReviews: '',
    templateError: '',

    initialize: function () {
        //Set templates to use later on
        this.templateReviews = _.template(this.$('#template-reviews').html());
        this.templateError = _.template(this.$('#template-error').html());

        //Listen to global events for change of new club
        App.events.on('newReviews', this.loadReviews, this);

    },

    loadReviews: function (data) {

        //get moviename from data
        let moviename = data.name;

        //get data from collection. Perform actions based on results (success / error). Send moviename as a parameter
        this.collection.fetch({
            success: (collection) => this.loadReviewsSuccessHandler(collection, moviename),
            error: (collection, response) => this.loadReviewsErrorHandler(collection, response)
        });

    },
    loadReviewsSuccessHandler: function (collection, moviename) {

        //Change the dom to the right content and send the movie name as an extra option
        $('#app').html(this.templateReviews({
            reviews: collection.models[0].attributes.results,
            name: moviename
        }));

    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
     loadReviewsErrorHandler: function (collection, response) {

        //set errortext if one might occur
        $('#app').html(this.templateError({message: response.responseJSON.error}));
     }
    });

 export default Review;
