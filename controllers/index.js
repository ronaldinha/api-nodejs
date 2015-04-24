var express = require('express');
var serveStatic = require('serve-static');
var router = express.Router();
var app = require('../app').app;
var CURRENT_VERSION = require('../configuration/conf').CURRENT_VERSION;

// Define routes
app.use('/' + CURRENT_VERSION + '/charities', require('./charities'));
app.use('/' + CURRENT_VERSION + '/missions', require('./missions'));
app.use('/' + CURRENT_VERSION + '/tags', require('./tags'));
app.use('/' + CURRENT_VERSION + '/volunteers', require('./volunteers'));
app.use('/' + CURRENT_VERSION + '/users', require('./users'));
// Load the documentation folder to make it accessible online
app.use('/' + CURRENT_VERSION + '/doc', serveStatic('doc', {'index': ['index.html']}));

module.exports = router;