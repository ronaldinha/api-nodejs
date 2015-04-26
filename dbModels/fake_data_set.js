// To create the data-set 
// copy this file in /data/db/scripts
// open a mongo shell and run load("/data/db/scripts/fake_data_set.js")

var tags = [
	{ 
		_id: ObjectId("553ccd6f8a07365293ece170"),
		name: "medical" 
	}, 
	{ 
		_id: ObjectId("553ccd6f8a07365293ece171"),
		name: "alimentaire"
	},
	{ 
		_id: ObjectId("553ccd6f8a07365293ece172"),
		name: "education" 
	} 
];

var charities = [
	{ 
		_id: ObjectId("553ccd6f8a07365293ece173"),
		name: "la Croix-Rouge Française",
		address: "Croix-Rouge française 98 rue Didot, 75694 Paris Cedex 14",
		website: "www.croix-rouge.fr",
		tags: [ObjectId("553ccd6f8a07365293ece170"), ObjectId("553ccd6f8a07365293ece171")]
	},
	{ 
		_id: ObjectId("553ccd6f8a07365293ece174"),
		name: "les Restos du Coeur",
		address: "8 rue d'Athènes 75009 PARIS",
		website: "www.restosducoeur.org",
		tags: [ObjectId("553ccd6f8a07365293ece171")]
	},
	{ 
		_id: ObjectId("553ccd6f8a07365293ece175"),
		name: "les enfoiros",
		website: "www.enfoiros.org",
		tags: [ObjectId("553ccd6f8a07365293ece171")]
	}
];

var missions = [
	{
		_id: ObjectId("553ccd6f8a07365293ece176"),
		name: "responsable son pour un concert",
		description: "",
		duration: 200,
		date: new Date(2016,4,14), // 14 mai 2016
		creationDate: new Date(),
		location: { type: 'Point', coordinates: [-100.0, 70.0] },
		maxParticipants: 3,
		refAssociation: ObjectId("553ccd6f8a07365293ece175"),
		contact: { name: "Thomas Stop", email: "thomas.stop@etud.insa-toulouse.fr"},
		volunteers: [],
		tags: [],
		status: 1
	},
	{
		_id: ObjectId("553ccd6f8a07365293ece177"),
		name: "bénévole dans le centre de Montpellier",
		description: "",
		duration: 120,
		date: new Date(2015,11,23), // 23 decembre 2015
		creationDate: new Date(),
		location: { type: 'Point', coordinates: [-100.0, 70.0] },
		maxParticipants: -1,
		refAssociation: ObjectId("553ccd6f8a07365293ece174"),
		contact: { name: "Thomas Stop", email: "thomas.stop@etud.insa-toulouse.fr" },
		volunteers: [],
		tags: [ObjectId("553ccd6f8a07365293ece171")],
		status: 1
	},
	{
		_id: ObjectId("553ccd6f8a07365293ece178"),
		name: "aide pour une innondation dans le Limousin",
		description: "",
		duration: 240,
		date: new Date(2015,3,27), // 27 avril 2015
		creationDate: new Date(),
		location: { type: 'Point', coordinates: [-100.0, 70.0] },
		maxParticipants: -1,
		refAssociation: ObjectId("553ccd6f8a07365293ece173"),
		contact: { name: "Emma Natureau", email: "emma.natureau@croix-rouge.fr"},
		volunteers: [],
		tags: [],
		status: 1
	}
];

var volunteers = [
	{
		_id: ObjectId("553ccd6f8a07365293ece179"),
		pseudo: "Adam",
		phone: "0634625160",
		age: 16,
		email: "adam_duffour@laposte.net",
		points: 0,
		lastLocation: { type: 'Point', coordinates: [6.0, 10.0] },
		missions: [],
		friends: []
	},
	{
		_id: ObjectId("553ccd6f8a07365293ece180"),
		pseudo: "Pierre",
		phone: "0634625161",
		age: 20,
		email: "pierre_trainal@gmail.com",
		points: 0,
		lastLocation : { type: 'Point', coordinates: [-20.0, 5.0] },
		missions: [],
		friends: []
	},
	{
		_id: ObjectId("553ccd6f8a07365293ece181"),
		pseudo: "Justine",
		phone: "0634625162",
		age: 25,
		email: "justine.bello@live.fr",
		points: 0,
		lastLocation: { type: 'Point', coordinates: [34.0, -50.0] },
		missions: [],
		friends: [ObjectId("553ccd6f8a07365293ece179")]
	}
];

// Get localDB
var db = new Mongo().getDB("localDB");
for (var i = tags.length - 1; i >= 0; i--) {
	db.tags.insert(tags[i]);
};

for (var i = charities.length - 1; i >= 0; i--) {
	db.charities.insert(charities[i]);
};

for (var i = volunteers.length - 1; i >= 0; i--) {
	db.volunteers.insert(volunteers[i]);
};

for (var i = missions.length - 1; i >= 0; i--) {
	db.missions.insert(missions[i]);
};