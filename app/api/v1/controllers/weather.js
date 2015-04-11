var Apis = require(__base + 'app/lib/apis');

var parseCoordinates = function(coordinates) {
    coordinates = coordinates.split(', ');

    return {latitude: coordinates[0], longitude: coordinates[1]};
};

var renderResponse = function(data) {
    WeatherController.callback(null, data);
}

var fetch = function(api) {
    switch(WeatherController.type) {
        case 'current':
            api.fetchCurrent(WeatherController.coordinates, renderResponse);

            break;
        case 'forecast':
            api.fetchForecast(WeatherController.coordinates, renderResponse);

            break;
        default:
            throw new Error(WeatherController.type + ' is not a valid type')
    }
};

var WeatherController = {
    callback: null,
    type: null,
    coordinates: null,
    read: function(request, content, callback) {
        WeatherController.type = request.params.type;
        WeatherController
            .coordinates = parseCoordinates(request.params.coordinates);
        WeatherController.callback = callback;

        Apis.get('OpenWeatherMap', fetch);
    }
};

module.exports = WeatherController;
