var express = require('express');
var router = express.Router();
var Volunteer = require('../dbModels').Volunteer;

/**
* @api {get} /v1/volunteers
* @apiName getAllVolunteers
* @apiGroup Volunteers
* @apiDescription volunteers list
* @apiVersion 1.0.0
* @apiSuccess {String} _id volunteer id
* @apiSuccess {String} pseudo volunteer pseudo
* @apiSuccess {String} phone phone number
* @apiSuccess {String} email volunteer email
* @apiSuccess {String[]} friends array of other volunteers ids
* @apiSuccess {String[]} missions array of missions id
* @apiSuccess {Object} lastLocation volunteer last registered geolocation
* @apiSuccess {String} lastLocation.type type of geolocation
* @apiSuccess {Number[]} lastLocation.coordinates latitude and longitude
* @apiSuccess {Number} points volunteer number of points (default 0)
* @apiSuccessExample {json} Success-Response
* {
*	"_id": "volunteer id 1",
*	"pseudo": "ze pseudo",
*	"phone": "phone number",
*	"age": 25,
*	"email": "email address",
*	"friends": [
*		"volunteer id 2"
*	],
*	"missions": [
*		"mission id 1"
*	],
*	"lastLocation": {
*		"type": "Point",
*		"coordinates": [
*			34,
*			-50
*		]
*	},
*	"points": 150
* }
*/
router.get('/', function(req, res) {
	Volunteer.find({}, function(err, volunteers){
		if (err) return {"error": err};
		res.type('application/json');
		res.status(200);
		res.send(JSON.stringify(volunteers, null, 4)); // Use the JSON.stringify(obj, null, spaces) to have pretty JSON
	});
});

module.exports = router;