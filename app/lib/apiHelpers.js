var request = require('request'),
    Helpers = require('./helpers');

module.exports = {
    raiseEndpointError: function(response) {
        throw new Error('Endpoint error: ' + response.statusCode);
    },
    success: function(response) {
        return response.statusCode == 200;
    },
    processResponse: function(response, body, api) {
        if(this.success(response)) {
            api.callback(body);
        } else {
            this.raiseEndpointError(response);
        }
    },
    fetchEndpoint: function(endpoint, requestor) {
        request(endpoint, requestor.handleResponse);
    }
};
