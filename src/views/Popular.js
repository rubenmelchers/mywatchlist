import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ReviewLinks from '../views/ReviewLinks';

/**
 * Object representing the TeamLinks element
 *
 * @constructor
 */
 const Popular = View.extend({
    templateMovies: '',
    templateError: '',

    initialize: function () {

        //Set templates to use later on
        this.templateMovies = _.template(this.$('#template-popular').html());
        this.templateError = _.template(this.$('#template-error').html());

        //Listen to global events for change of new club
        App.events.on('newPopularMovies', this.loadMovies, this);

    },

    loadMovies: function (data) {

        //get data from collection. Perform actions based on results (success / error)
        this.collection.fetch({
            success: (collection) => this.loadMoviesSuccessHandler(collection),
            error: (collection, response) => this.loadMoviesErrorHandler(collection, response)
        });

    },
    loadMoviesSuccessHandler: function (collection) {

        //Change the dom to the right content
        $('#app').html(this.templateMovies({movies: collection.models[0].attributes.results}));

        //check for reviewbuttons and make new links out of them
        let popularContainer = document.querySelector('#app'),
            reviewButtons = popularContainer.querySelectorAll('.movie-review');

        [].forEach.call(reviewButtons, function(elem) {
            new ReviewLinks({el: elem});
        });
    },

    loadMoviesErrorHandler: function (collection, response) {

        //set errortext if one might occur
        $('#app').html(this.templateError({message: response.responseJSON.error}));
    }
});

 export default Popular;
