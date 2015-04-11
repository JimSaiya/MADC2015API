var Apis = require(__base + 'app/lib/apis'),
    GeolocationHelpers = require(__base + 'app/lib/geolocationHelpers');

var renderResponse = function(data) {
    RIDBController.callback(null, data);
};

var fetch = function(api) {
    switch(RIDBController.type) {
        /*
        case 'all_recreation_areas':
            api.fetchRecreationAreas(
                RIDBController.coordinates,
                RIDBController.radius,
                RIDBController.limit,
                renderResponse
            );

            break;
        */
        case 'all_facilities':
            api.fetchFacilities(
                RIDBController.coordinates,
                RIDBController.radius,
                RIDBController.limit,
                renderResponse
            );

            break;
        default:
            throw new Error(RIDBController.type + ' is not a valid type');
    }
};

var RIDBController = {
    type: null,
    coordinates: null,
    radius: null,
    limit: null,
    callback: null,
    read: function(request, content, callback) {
        RIDBController.type = request.params.type;
        RIDBController
            .coordinates = GeolocationHelpers.parseCoordinates(request.params.coordinates);
        RIDBController.radius = request.params.radius;
        RIDBController.limit = request.params.limit;
        RIDBController.callback = callback;

        Apis.get('RIDB', fetch);
    }
};

module.exports = RIDBController;
