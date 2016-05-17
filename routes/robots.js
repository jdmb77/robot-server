//--------------Robot routes and db actions------------o~<')))>{
var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Robot = require('../models/Robot');

// Get Robot list (all in collection)
router.get('/', function(req, res, next) {
	Robot.find(function(err, robot){
		if (err) return next(err);
		res.json(robot);
	});
});
// Get robot by rid
router.get('/:rid', function(req, res, next){
	Robot.findOne({ rid: req.params.rid }, function(err, robot){
		if(err) return next(err);
		res.json(robot);
	});
});
// Post robot json object (add new robot)
router.post('/', function(req, res, next) {
	Robot.create(req.body, function(err, robot){
		if (err) return next(err);
		res.json(robot);
	});
});
// Put robot json object (update robot by rid)
router.put('/:rid', function(req, res, next) {
	Robot.findOneAndUpdate({ rid: req.params.rid }, req.body, function(err, robot){
		if (err) return next(err);
		res.json(robot);
	});
});
// Delete robot by rid (delete robot in collection)
router.delete('/:rid', function(req, res, next) {
	Robot.findOneAndRemove({ rid: req.params.rid }, req.body, function(err, robot){
		if (err) return next(err);
		res.json(robot);
	});
});

module.exports = router;
