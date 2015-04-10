var seedTest = function() {
    var Test = require(__base + 'app/api/v1/models/test');

    Test.find(function(error, tests) {
        if(tests.length) return;

        new Test({
            message: 'This is just a test. In the case of an actual emergency...'
        }).save();
    });
};

module.exports.apply = function() {
    console.log('Seeding...');

    [
        seedTest
    ].forEach(function(seed) { seed.call(); });

    console.log('...completed');
};
