var express = require('express'),
	router = express.Router();

// Get home page (index.ejs)
router.get('/', function(req, res) {
	res.render('index', { title: 'Robot GCS' });
});

module.exports = router;