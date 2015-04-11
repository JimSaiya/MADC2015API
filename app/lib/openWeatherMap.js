var request = require('request'),
    Helpers = require(__base + 'app/lib/helpers'),
    ApiHelpers = require(__base + 'app/lib/apiHelpers');

var endpoints = {
    current: {
        handleResponse: function(error, response, body) {
            Helpers.processError(error);
            ApiHelpers.processResponse(response, body, OpenWeatherMap);
        },
        fetch: function(coordinates) {
            var endpoint = [
                'http://api.openweathermap.org/data/2.5/weather?lat=',
                coordinates.latitude,
                '&lon=',
                coordinates.longitude,
                '&units=imperial'
            ].join('');

            ApiHelpers.fetchEndpoint(endpoint, endpoints.current);
        }
    },
    forecast: {
        handleResponse: function(error, response, body) {
            Helpers.processError(error);
            ApiHelpers.processResponse(response, body, OpenWeatherMap);
        },
        fetch: function(coordinates) {
            var endpoint = [
                'http://api.openweathermap.org/data/2.5/forecast/daily?lat=',
                coordinates.latitude,
                '&lon=',
                coordinates.longitude,
                '&cnt=7',
                '&mode=json',
                '&units=imperial'
            ].join('');

            ApiHelpers.fetchEndpoint(endpoint, endpoint.forecast);
        }
    }
};

var fetch = function(domain, coordinates, callback) {
    OpenWeatherMap.callback = callback;

    domain.fetch(coordinates);
};

OpenWeatherMap = {
    api: null,
    callback: null,
    fetchCurrent: function(coordinates, callback) {
        fetch(endpoints.current, coordinates, callback);
    },
    fetchForecast: function(coordinates, callback) {
        fetch(endpoints.forecast, coordinates, callback);
    }
};

module.exports = OpenWeatherMap;
