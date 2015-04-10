var Test = require(__base + 'app/api/v1/models/test');

module.exports = {
    read: function(request, content, callback) {
        Test.findOne(function(error, result) {
            if(error) {
                // TODO: Improve
                console.log('An error occured', error);
            } else {
                callback(null, result);
            }
        });
    }
};
