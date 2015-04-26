var express = require('express');
var router = express.Router();
// Load the models that you need
// Example : var Charity = require('../dbMmodels').Charity;
var Charity = require('../dbModels').Charity;

/**
* @api {get} /v1/charities
* @apiName getAllCharities
* @apiGroup Charities
* @apiDescription charities list
* @apiVersion 1.0.0
* @apiSuccess {String} _id charity id
* @apiSuccess {String} name charity name
* @apiSuccess {String} address charity address
* @apiSuccess {String} website charity website
* @apiSuccess {String[]} tags tags id
* @apiSuccessExample {json} Success-Response
* {
*	"_id": "553ccd6f8a07365293ece043"
*	"name" : "le coeur sur la main",
*	"address" : "241 route de Narbonne 31410 Toulouse",
*	"website" : "www.coeursurlamain.fr",
*	"tags" : ["553ccd6f8a07365293ece043", "553ccd6f8a07365293ece040", "553ccd6f8a07365293ece042"],
* }
*/
router.get('/', function(req, res) {
	// You can then use models
	// Example :
	Charity.find({}, function(err, charities){
		if (err) return {"error": err};
		res.type('application/json');
		res.status(200);
		res.send(JSON.stringify(charities, null, 4)); // Use the JSON.stringify(obj, null, spaces) to have pretty JSON
	});
});

module.exports = router;
