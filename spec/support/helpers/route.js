var processedRest = function(route, rest) {
    route.apply(rest);

    return rest;
};

module.exports = {
    isGetRequest: function(route, rest) {
        rest = processedRest(route, rest);

        return rest.method === 'GET';
    },
    isCorrectPath: function(route, rest, path) {
        rest = processedRest(route, rest);

        return rest.path === path;
    }
};
