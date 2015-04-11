module.exports.apply = function(dirname) {
    var localAppInfo = {};
    var localServices = {
        'mongolab': [
            {
                'credentials': {
                    'uri': 'mongodb://localhost/madc2015api'
                }
            }
        ]
    };

    global.__base = dirname + '/';
    global.__appInfo = JSON
        .parse(process.env.VCAP_APPLICATION || JSON.stringify(localAppInfo));
    global.__services = JSON
        .parse(process.env.VCAP_SERVICES || JSON.stringify(localServices));
    global.__RIDB_KEY = process.env.RIDB_KEY
};
