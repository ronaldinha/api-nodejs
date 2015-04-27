var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VolunteerSchema = new Schema({
	pseudo: String,
	phone: String,
	age: Number,
	email: String,
	points: { type: Number, default: 0 },
	lastLocation: {
	    type: { type: String },
	    coordinates: []
	},
	missions: [ Schema.Types.ObjectId ],
	friends: [ Schema.Types.ObjectId ]
}, { collection: 'volunteers' });

VolunteerSchema.index({ lastLocation : '2dsphere' });

Volunteer = mongoose.model('Volunteer', VolunteerSchema);

module.exports = Volunteer;