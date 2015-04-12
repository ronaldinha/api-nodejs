var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VolunteerSchema = new Schema({

}, { collection: 'volunteers' });

User = mongoose.model('Volunteer', VolunteerSchema);