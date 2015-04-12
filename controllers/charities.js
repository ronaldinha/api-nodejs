var express = require('express');
var router = express.Router();
// Load the models that you need
// Example : var Charity = require('../dbMmodels').Charity;

/**
* @api {get} /v1/charities/:name charities default endpoint title
* @apiName charitiesDefault
* @apiGroup Charities
* @apiDescription default charities endpoint description
* @apiVersion 1.0.0
* @apiParam {String} name name of the association
* @apiSuccess {String} name name
* @apiSuccessExample {json} Success-Response
* {
*	"name" : "hachi"
* }
*/
router.get('/:name', function(req, res) {
	// You can then use models
	// Example :
	//Charity.findOne(function(err, charity){
	//	if (err) return {"error": err};
	//	res.type('application/json');
	//	res.status(200);
	//	res.send(JSON.stringify(charity, null, 4)); // Use the JSON.stringify(obj, null, spaces) to have pretty JSON
	//});
	var result = {"name": req.params.name};
	res.type('application/json'); // Set the content-type
	res.status(200); // Set the status code
	res.send(JSON.stringify(result, null, 4)); // Use the JSON.stringify(obj, null, spacesNb) to have pretty JSON
});

module.exports = router;
