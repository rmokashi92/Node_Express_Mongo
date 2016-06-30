var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello World!' });
});

router.get('/datalist', function(req, res) {
	var db = req.db;
	var collection = db.get('json1');
	collection.find({},{},function(e,docs){
		res.render('datalist',{
			"datalist":docs
		})
	});
});

router.get('/upload', function(req, res) {
    res.render('upload', { title: 'Upload Docs' });
});

module.exports = router;
