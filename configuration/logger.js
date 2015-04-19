/**
 * Created by Nicolas on 17/04/2015.
 */
var winston = require('winston');
var conf = require('./conf');


var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ json: false, timestamp: true, colorize: 'all' })
  ],
  exceptionHandlers: [
    new (winston.transports.Console)({ json: false, timestamp: true, colorize:'all' })
  ],
  exitOnError: false
});

if (conf.LOG_TO_FILE) {
  logger.add(winston.transports.File, { filename: __dirname + '/../logs/debug.log', json: false });
  logger.handleExceptions(winston.transports.File, { filename: __dirname + '/../logs/exceptions.log', json: false });
}
module.exports = logger;