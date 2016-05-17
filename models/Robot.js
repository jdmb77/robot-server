var mongoose = require('mongoose');

var RobotSchema = new mongoose.Schema({
	rid: Number,
	ip : String,
	type : String,
	status : String,
	alt : Number,
	dir : Number,
	lat : Number,
	lon : Number,
	speed : Number,
	battery : Number,
	force_dir : Number,
	force_speed : Number,
	goals : [{
		lat : Number,
		lon : Number
	}],
	updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Robot', RobotSchema);
