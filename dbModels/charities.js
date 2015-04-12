var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Example
// fake data {"name": "gaya", "type": "food program"}
var CharitySchema = new Schema({
	name: String,
	type: String 
}, { collection: 'charities' });

Charity = mongoose.model('Charity', CharitySchema);