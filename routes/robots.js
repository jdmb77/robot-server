var express = require('express'),
	router = express.Router();
	//mongoose = require('mongoose'),
	//robot = require('../models/robot');

var robots = [
	{ ip: '192.168.1.201', type: 'Jaguar' },
	{ ip: '192.168.1.202', type: 'Jaguar' }
];

router.get('/', function(req, res) {
	res.json(robots);
});

module.exports = router;