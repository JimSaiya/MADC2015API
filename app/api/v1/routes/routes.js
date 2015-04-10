module.exports.apply = function(rest) {
    var modules = [
        './test'
    ];

    modules.forEach(function(module) { require(module).apply(rest); });
};
