// TODO: Move individual seeds to subdirectory/own module

var seedTest = function() {
    var Test = require(__base + 'app/api/v1/models/test');

    Test.find(function(error, tests) {
        if(tests.length) return;

        new Test({
            message: 'This is just a test. In the case of an actual emergency...'
        }).save();
    });
};

var seedApis = function() {
    var Api = require(__base + 'app/api/v1/models/api');

    [
        {
            name: 'OpenWeatherMap',
            url: 'http://openweathermap.org/api',
            key: null
        }
    ].forEach(function(apiAttributes) {
        Api.find({name: apiAttributes.name}, function(error, apiRecord) {
            if(apiRecord.length) return

            new Api(apiAttributes).save();
        });
    });
}

module.exports.apply = function() {
    console.log('Seeding...');

    [
        seedTest,
        seedApis
    ].forEach(function(seed) { seed.call(); });

    console.log('...completed');
};
