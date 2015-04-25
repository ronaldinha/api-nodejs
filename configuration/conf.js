// configuration parameters
var LOCAL_DB = {
  auth: false,
  username: "",
  password: "",
  host: "localhost",
  port: "27017",
  name: "localDB"
};

var CLOUD_DB = {
  auth: true,
  username: "db_user",
  password: "db_password",
  host: "ds039331.mongolab.com",
  port: "39331",
  name: "db"
};

var DB = LOCAL_DB;
var DB_URI = 'mongodb://' + ((DB.auth) ? DB.username + ':' + DB.password + '@' : '') + DB.host + ':' + DB.port + '/' + DB.name;

var PORT = process.env.PORT || 3000;

// if true, winston will also log into logs/debug.log and logs/exceptions.log
var LOG_TO_FILE = false;

var CURRENT_VERSION = 'v1';

module.exports = {
	"DB_URI" : DB_URI,
	"PORT" : PORT,
  "LOG_TO_FILE" : LOG_TO_FILE,
  "CURRENT_VERSION": CURRENT_VERSION
};