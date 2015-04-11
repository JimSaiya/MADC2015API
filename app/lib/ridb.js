var request = require('request'),
    Helpers = require(__base + 'app/lib/helpers'),
    ApiHelpers = require(__base + 'app/lib/apiHelpers');

// TODO: Add more endpoints. For now its kept simple.
var endpoints = {
    facilites: {
        handleResponse: function(error, response, body) {
            Helpers.processError(error);
            ApiHelpers.processResponse(response, body, RIDB);
        },
        fetch: function(coordinates, radius, limit) {
            var endpoint = [
                'https://ridb.recreation.gov/api/v1/facilities?latitude=',
                coordinates.latitude,
                '&longitude=',
                coordinates.longitude,
                '&radius=',
                radius,
                '&limit=',
                limit, // REVIEW: Limits should be flexible, but limited
                '&apikey=',
                __RIDB_KEY
            ].join('');


            ApiHelpers.fetchEndpoint(endpoint, endpoints.facilites);
        }
    }
    /* ENDPOINT NOT FULLY FUNCTIONAL
    recreationAreas: {
        handleResponse: function(error, response, body) {
            Helpers.processError(error);
            ApiHelpers.processResponse(response, body, RIDB);
        },
        fetch: function(coordinates, radius, limit) {
            var endpoint = [
                'https://ridb.recreation.gov/api/v1/recareas?latitude=',
                coordinates.latitude,
                '&longitude=',
                coordinates.longitude,
                '&radius=',
                radius,
                '&limit=',
                limit, // REVIEW: Limits should be flexible, but limited
                '&apikey=',
                __RIDB_KEY
            ].join('');


            ApiHelpers.fetchEndpoint(endpoint, endpoints.recreationAreas);
        }
    }
    */
};

var fetch = function(domain, coordinates, radius, limit, callback) {
    RIDB.callback = callback;

    domain.fetch(coordinates, radius, limit);
};

RIDB = {
    api: null,
    callback: null,
    fetchFacilities: function(coordinates, radius, limit, callback) {
        fetch(endpoints.facilites, coordinates, radius, limit, callback);
    }
    //fetchRecreationAreas: function(coordinates, radius, limit, callback) {
    //    fetch(endpoints.recreationAreas, coordinates, radius, limit, callback);
    //}
};

module.exports = RIDB;
