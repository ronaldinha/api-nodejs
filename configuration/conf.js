// configuration parameters
var DB_NAME = "localDB";
var DB_PORT = 27017;
var DB_URI = "mongodb://localhost:" + DB_PORT + "/" + DB_NAME;
var PORT = process.env.PORT || 3000;

module.exports = {
	"DB_NAME" : DB_NAME,
	"DB_URI" : DB_URI,
	"PORT" : PORT
};