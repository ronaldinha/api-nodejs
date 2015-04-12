var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MissionSchema = new Schema({

}, { collection: 'missions' });

Mission = mongoose.model('Mission', MissionSchema);