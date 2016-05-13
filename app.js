//--------------Import dependencies----------o~<')))>{
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	logger = require('morgan');

//-------------------Routes------------------o~<')))>{
var	index = require('./routes/index'),
	robots = require('./routes/robots');

//--------------Database Connect-------------o~<')))>{
var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.1.75/robot-test-svr', function(err) {
    if(err) {
        console.log('Database connection error', err);
    } else {
        console.log('Database connection successful');
    }
});

//---------------Configurations--------------o~<')))>{
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//---------------View Rendering--------------o~<')))>{
app.use('/', index);
app.use('/robots', robots);

//---------------Error Handlers--------------o~<')))>{
// Error 404 handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Development error handler. Prints Stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// Production error handler. No stacktraces rendered
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//--------------Bootstrap Server-------------o~<')))>{
module.exports = app;
