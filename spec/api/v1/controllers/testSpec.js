var assert = require('assert'),
    expect = require('expect'),
    Helper = require('../../../support/helpers/helper'),
    Factory = require(__base + 'spec/support/helpers/factory'),
    Test = require(__base + 'app/api/v1/models/test'),
    TestController = require(__base + 'app/api/v1/controllers/test');

describe('TestController', function() {
    describe('read', function(done) {
        var testObject;

        beforeEach(function() {
            Factory.clear();

            testObject = Factory.create('test');

            Test.findOne = function(callback) {
                callback(null, testObject);
            };
        });

        it('returns testObject', function(done) {
            // REVIEW: Is this how request and content work? See connect-rest
            // documentation or source. (exiquio)
            var request = {body: null};
            var content = request.body;
            var callback = function(ignore, result) {
                expect(result).toEqual(testObject);

                done();
            };

           TestController.read(request, content, callback);
        });
    });
});
