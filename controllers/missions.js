var express = require('express');
var router = express.Router();

/**
* @api {get} /v1/missions missions default endpoint title
* @apiName missionDefault
* @apiGroup Missions
*/
router.get('/', function(req, res) {
	res.send("missions");
});

module.exports = router;