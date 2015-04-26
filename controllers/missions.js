var express = require('express');
var router = express.Router();
var Mission = require('../dbModels').Mission;

/**
* @api {get} /v1/missions
* @apiName getAllMissions
* @apiGroup Missions
* @apiDescription missions list
* @apiVersion 1.0.0
* @apiSuccess {String} _id mission id
* @apiSuccess {String} name mission name
* @apiSuccess {Number} duration duration in minutes 
* @apiSuccess {Number} maxParticipants maximum number of volunteers accepted
* @apiSuccess {String} refAssociation association id
* @apiSuccess {Number} status status of the mission (-1 for cancelled, 0 for finished and 1 for active)
* @apiSuccess {String[]} tags tags id
* @apiSuccess {String[]} volunteers volunteers id
* @apiSuccess {Object} contact person to contact for more information
* @apiSuccess {String} contact.name contact name
* @apiSuccess {String} contact.email contact email
* @apiSuccess {Object} location mission geolocation
* @apiSuccess {String} location.type type of geolocation
* @apiSuccess {Number[]} location.coordinates latitude and longitude
* @apiSuccess {String} date mission date
* @apiSuccess {String} description mission description
* @apiSuccess {String} creationDate mission creation date (default now)
* @apiSuccessExample {json} Success-Response
* {
*	"_id": "id mission"
*	"name" : "une aide quelconque",
*	"duration": 60,
*	"maxParticipants": 10,
*	"refAssociation": "association id",
*	"status": 1,
*	"tags" : ["id tag 1", "id tag 2", "id tag 3"],
*	"volunteers": ["bénévole 1"],
*	"contact": {
*		"name": "un nom de personne",
*		"email": "une adresse email"
*	},
*	"location": {
*		"type": "Point",
*		"coordinates": [
*			-10,
*			90
*		]
*	},
*	"date": "1915-04-26T22:00:00.000Zune",
*	"description": "",
*	"creationDate": "1915-03-26T22:00:00.000Z"
* }
*/
router.get('/', function(req, res) {
	Mission.find({}, function(err, missions){
		if (err) return {"error": err};
		res.type('application/json');
		res.status(200);
		res.send(JSON.stringify(missions, null, 4)); // Use the JSON.stringify(obj, null, spaces) to have pretty JSON
	});
});

module.exports = router;