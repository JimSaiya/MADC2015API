/*jshint node:true*/

var globals = require('./config/globals'),
    connect = require('connect'),
    bodyParser = require('body-parser'),
    rest = require('connect-rest'),
    Settings = require('./config/settings'),
    Database = require('./config/database'),
    Seeds = require('./config/seeds'),
    Routes = require('./config/routes');

var app = connect()
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json());

var initialize = function() {
    var initSettings = function() {
        globals.apply(__dirname);
        Settings.apply(app, rest);
    };

    var initDatabase = function() {
        Database.connect();
        Seeds.apply();
    };

    var initRoutes = function() {
        Routes.apply(rest);
    };

    initSettings();
    initDatabase();
    initRoutes();
};

var start = function() {
    var host = (process.env.VCAP_APP_HOST || 'localhost');
    var port = (process.env.VCAP_APP_PORT || 3000);

    var listen = function() {
        app.listen(port, host);
    };

    var log = function() {
        console.log('App started on port ' + port);
    };

    listen();
    log();
};

initialize();
start();
