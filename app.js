/* DEPENDENCIES */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var requestsLogger = require('morgan');
var config = require('./configuration/conf'); // config parameters
var logger = require('./configuration/logger');

/* EXPRESS */
// create the express app
var app = module.exports = express();
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));
// use the logger in dev mode
app.use(requestsLogger('dev'));

// must before route definitions because they use the app variable
module.exports = { "app" : app };

/* MONGOOSE */
// connect to mongoose
mongoose.connect(config.DB_URI);
// handle succesful connections
mongoose.connection.on('open', function (){
  logger.info('connected to database');
});
// handle connection failures
mongoose.connection.on('error', function(){
  logger.error ('connection error');
});

/* ROUTES */
// declare the routes
app.use('/', require('./controllers'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error(req.method + ' on ' + req.path + ' is not supported');
  err.status = 404;
  next(err);
});

/* ERROR HANDLERS */
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}
else {
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.send({
      message: err.message
    });
  });
}



/* SERVER START */
app.listen(config.PORT, function() {
  logger.info('Listening on PORT ' + config.PORT + '...')
});