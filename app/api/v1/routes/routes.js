module.exports.apply = function(rest) {
    var modules = [
        './test',
        './weather'
    ];

    modules.forEach(function(module) {
        require(module).apply(rest);
    });
};
