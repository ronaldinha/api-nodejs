// configuration parameters
var DB_NAME = "localDB";
var DB_PORT = 27017;
var DB_URI = "mongodb://localhost:" + DB_PORT + "/" + DB_NAME;
var PORT = process.env.PORT || 3000;

// if true, winston will also log into logs/debug.log and logs/exceptions.log
var LOG_TO_FILE = false;

var CURRENT_VERSION = 'v1';

module.exports = {
	"DB_NAME" : DB_NAME,
	"DB_URI" : DB_URI,
	"PORT" : PORT,
  "LOG_TO_FILE" : LOG_TO_FILE,
  "CURRENT_VERSION": CURRENT_VERSION
};