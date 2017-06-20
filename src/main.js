import _ from 'underscore';
import {Events} from 'backbone';

/** COLLECTIONS **/
import Popularmovies from './collections/Popularmovies';
import Upcomingmovies from './collections/Upcomingmovies';

/** MODELS **/
import Popularmovie from './models/Popularmovie';
import Upcomingmovie from './models/Upcomingmovie';

/** VIEWS **/
import MovieLinks from './views/MovieLinks';
import Popular from './views/Popular';
import Upcoming from './views/Upcoming';
import Homescreen from './views/Homescreen';

(function () {

	let setGlobalVariables = () => {
		window.App = {};
		App.events = _.clone(Events);
	}

    /**
     * Run after dom is ready
     */
    let init = () => {

    	setGlobalVariables();

        let popularMoviesCollection = new Popularmovies(),
            upcomingMoviesCollection = new Upcomingmovies();

        new MovieLinks({el: "#movie-links"});
        new Popular({el: "#popularmovies", collection: popularMoviesCollection});
        new Upcoming({el: "#upcomingmovies", collection: upcomingMoviesCollection});
        new Homescreen({el: "#homescreen"});

        Backbone.history.start({
            pushState: true,
            root: '/0889496/mywatchlist'
        });

    };

    window.addEventListener('load', init);
})();
