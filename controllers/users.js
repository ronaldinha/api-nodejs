var express = require('express');
var router = express.Router();

/**
* @api {get} /v1/users Default
* @apiName default
* @apiGroup Users
*/
router.get('/', function(req, res) {
	res.send('users');
});

module.exports = router;