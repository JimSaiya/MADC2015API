module.exports.apply = function(rest) {
    var modules = [
        './routes/test',
        './routes/ridb',
        './routes/weather'
    ];

    modules.forEach(function(module) {
        require(module).apply(rest);
    });
};
