// configuration parameters
var dbName = "localDB";
var mongoPort = 27017;
var DBURI = "mongodb://localhost:" + mongoPort + "/" + dbName;
var PORT = process.env.PORT || 3000;

module.exports = {
	"dbName" : dbName,
	"DBURI" : DBURI,
	"port" : PORT
};