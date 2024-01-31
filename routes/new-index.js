
var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://jgar514:Heavyseas514@cluster0.viu7od0.mongodb.net/?retryWrites=true&w=majority";


router.get('/', (req, res, next) => {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("collection0");
		dbo.collection("collection1").find({}).toArray(function (err, result) {
			if (err) throw err;
			console.log('Mongo data coming in hot')
			console.log(result);
			res.json(result)
			db.close();
		});
	});
});

module.exports = router;