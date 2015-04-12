var express = require('express');
var serveStatic = require('serve-static');
var router = express.Router();
var app = require('../app').app;

// Define routes
app.use('/v1/charities', require('./charities'));
app.use('/v1/missions', require('./missions'));
app.use('/v1/tags', require('./tags'));
app.use('/v1/volunteers', require('./volunteers'));
app.use('/v1/users', require('./users'));
// Load the documentation folder to make it accessible online
app.use('/v1/doc', serveStatic('doc', {'index': ['index.html']}));

module.exports = router;