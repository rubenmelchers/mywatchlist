import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

/**
 * Object representing the TeamLinks element
 *
 * @constructor
 */
 const Homescreen = View.extend({
    templateHome: '',
    initialize: function () {

        //Set templates to use later on
        this.templateHome = _.template(this.$('#template-home').html());

        //Listen to global events for change of new club
        App.events.on('newHomeScreen', this.loadHome, this);

        $('#app').html(this.templateHome());
    },

    loadHome: function (data) {

        $('#app').html(this.templateHome());

    }
});

 export default Homescreen;
