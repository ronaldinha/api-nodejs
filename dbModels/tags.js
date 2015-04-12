var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagSchema = new Schema({

}, { collection: 'tags'});

Tag = mongoose.model('Tag', TagSchema);