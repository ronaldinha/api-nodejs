var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MissionSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, default: "" },
	duration: Number,
	date: { type: Date },
	creationDate: { type: Date, default: Date.now },
	location: {
	    type: { type: String },
	    coordinates: []
	},
	maxParticipants: Number, // -1 means no limit
	refAssociation: Schema.Types.ObjectId,
	contact: {
		name: String,
		email: String,
		phone: String
	},
	volunteers: [ Schema.Types.ObjectId ],
	tags: [ Schema.Types.ObjectId ],
	status: Number // -1: cancelled, 0: finished, 1: active
}, { collection: 'missions' });

Mission = mongoose.model('Mission', MissionSchema);

module.exports = Mission;