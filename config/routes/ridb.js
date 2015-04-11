module.exports.apply = function(rest) {
    var RIDBController = require(__base + 'app/api/v1/controllers/ridb');

    rest.get('ridb/:type/:coordinates/:radius/:limit', RIDBController.read);
};
