module.exports.apply = function(rest) {
    var TestController = require(__base + 'app/api/v1/controllers/test');

    rest.get('test', TestController.read);
};
