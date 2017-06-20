import {Router} from 'backbone';

/**
 * Router for the movies URL's
 *
 * @constructor
 */
const MoviesRouter = Router.extend({
    routes: {
        'home': 'homeAction',
        'popular': 'popularAction',
        'upcoming': 'upcomingAction'
    },

    homeAction: function() {
        App.events.trigger('newHomeScreen')
    },

    popularAction: function() {
        App.events.trigger('newPopularMovies');
    },

    upcomingAction: function() {
        App.events.trigger('newUpcomingMovies');
    }
});

export default MoviesRouter;
