var mockDb = require(__base + 'spec/support/helpers/mockDb');

module.exports = {
    mocks: {
        'test': require(__base + 'spec/support/factories/test')
    },
    build: function(type, data) {
        var mock = this.mocks[type];

        data = data ? Object.assign(mock, data) : mock;

        return data;
    },
    create: function(type, data) {
        return mockDb.create(this.build(type, data));
    },
    find: function(id) {
        return mockDb.find(id);
    },
    clear: function() {
        mockDb.clear();
    }
};
