/*****************************************************************
* All endpoints without a precise type of user goes in this file *
*****************************************************************/

var express = require('express');
var router = express.Router();

/**
* @api {get} /v1 Default
* @apiName default
* @apiGroup General
*/
router.get('/', function(req, res) {
	res.send('general endpoint : example login or logout');
});

module.exports = router;