module.exports.apply = function(rest) {
    var WeatherController = require(__base + 'app/api/v1/controllers/weather');

    rest.get('weather/:type/:coordinates', WeatherController.read);
};
