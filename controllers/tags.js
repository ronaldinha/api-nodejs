var express = require('express');
var router = express.Router();

/**
* @api {get} /v1/tags tags default endpoint title
* @apiName tagsDefault
* @apiGroup Tags
*/
router.get('/', function(req, res) {
	res.send('tags');
});

module.exports = router;