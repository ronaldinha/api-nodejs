var express = require('express');
var router = express.Router();
var Tag = require('../dbModels').Tag;

/**
* @api {get} /v1/tags tags
* @apiName getAllTags
* @apiGroup Tags
* @apiDescription tags list
* @apiVersion 1.0.0
* @apiSuccess {String} _id tag id
* @apiSuccess {String} name tag name
* @apiSuccessExample {json} Success-Response
* {
*	"_id": "some id",
*	"name": "something fancy"
* }
*/
router.get('/', function(req, res) {
	Tag.find({}, function(err, tags){
		if (err) return {"error": err};
		res.type('application/json');
		res.status(200);
		res.send(JSON.stringify(tags, null, 4)); // Use the JSON.stringify(obj, null, spaces) to have pretty JSON
	});
});

module.exports = router;