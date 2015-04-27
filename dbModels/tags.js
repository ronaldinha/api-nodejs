var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagSchema = new Schema({
	name: { type: String, required: true }
}, { collection: 'tags' });

var Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;