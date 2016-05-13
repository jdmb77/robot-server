var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Robot = require('../models/Robot');

// Get Robot list
// var robots = [
// 	{ ip: '192.168.1.201', type: 'Jaguar' },
// 	{ ip: '192.168.1.202', type: 'Jaguar' }
// ];

router.get('/', function(req, res, next) {
	Robot.find(function(err, robot){
		if (err) return next(err);
		res.json(robot);
	});
});

router.post('/', function(req, res, next) {
	Robot.create(req.body, function(err, robot){
		if (err) return next(err);
		res.json(robot);
	});
});

module.exports = router;
