var mongoose = require('mongoose');

var testSchema = mongoose.Schema({
    message: String
});

module.exports = mongoose.model('Test', testSchema);
