import {View} from 'backbone';
import MoviesRouter from '../routers/MoviesRouter';

/**
 * Object representing the TeamLinks element
 *
 * @constructor
 */
const MovieLinks = View.extend({
    router: null,

    events: {
        'click a': 'clickHandler',
        'click #home': 'homeClickHandler'
    },

    initialize: function () {
        this.router = new MoviesRouter();
    },

    /**
     * Click handler for links, retrieve data attributes and navigate router
     *
     * @param e
     */
    homeClickHandler: function(e) {
        e.preventDefault();

        this.router.navigate('/', {trigger: true});

        Backbone.history.loadUrl();
        window.location.reload();
    },
    clickHandler: function (e) {
        e.preventDefault();

        //Get target the retrieve data properties
        let target = e.currentTarget,
            url = '/' + target.dataset['subject'];

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }
});

export default MovieLinks;
