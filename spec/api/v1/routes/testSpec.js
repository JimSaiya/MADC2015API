var assert = require('assert'),
    expect = require('expect'),
    Helper = require('../../../support/helpers/helper'),
    Route = require(__base + 'spec/support/helpers/route'),
    TestRoute = require(__base + 'app/api/v1/routes/test');

describe('TestRoute', function() {
    var rest = {
        method: null,
        path: null
    };

    var path,
        method;

    describe('GET /test', function(done) {
        beforeEach(function() {
            rest.get = function(path, callback) {
                this.method = 'GET';
                this.path = path;
            };
        });

        it('receives a GET request', function(done) {
            expect(Route.isGetRequest(TestRoute, rest)).toEqual(true);

            done();
        });

        it('recieves request proper path', function(done) {
            expect(Route.isCorrectPath(TestRoute, rest, 'test')).toEqual(true);

            done();
        });
    });
});
