var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Example
// fake data {"name": "gaya", "type": "food program"}
var CharitySchema = new Schema({
	name: { type: String, required: true },
	address: String,
	website: String,
	tags: [ Schema.Types.ObjectId ]
}, { collection: 'charities' });

Charity = mongoose.model('Charity', CharitySchema);

module.exports = Charity;