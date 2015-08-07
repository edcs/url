/*jshint node: true */
"use strict";

module.exports = {

    /**
     * Returns the current URL without a query string.
     *
     * @returns {string}
     */
    current: function () {
        var parts = [
            window.location.origin,
            window.location.pathname
        ];

        return parts.join('');
    },

    /**
     * Builds a URL query string based on the state parameters.
     *
     * @param state
     * @returns {string}
     */
    buildQueryString: function (state) {
        var parts = Array();

        for (var key in state){
            if (state.hasOwnProperty(key)) {
                parts.push(key + '=' + state[key]);
            }
        }

        return '?' + parts.join('&');
    },

    /**
     * Reads parameters from the URL query string.
     *
     * @param {string} name
     * @returns {string}
     */
    readQueryString: function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);

        return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
};
