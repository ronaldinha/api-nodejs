var express = require('express');
var router = express.Router();

/**
* @api {get} /v1/volunteers volunteers default endpoint title
* @apiName volunteersDefault
* @apiGroup Volunteers
*/
router.get('/', function(req, res) {
	res.send('volunteers');
});

module.exports = router;