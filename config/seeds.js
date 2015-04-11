module.exports.apply = function() {
    console.log('Seeding...');

    [
        require('./seeds/test'),
        require('./seeds/apis')
    ].forEach(function(seed) { seed.call(); });

    console.log('...completed');
};
