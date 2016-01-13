var express = require('express');
var router = express.Router();

// /api route
// becomes /api/pokemon
router.get('/pokemon', function(req, res){
	// renders (.html file, variables)
	res.render('api', {title: "Pokemon API"});
});

router.post('/pokemon', function(req, res){
	console.log(req.body.name);
	res.redirect('/api/pokemon');
});

module.exports = router;