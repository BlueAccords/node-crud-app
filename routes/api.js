var express = require('express');
var router = express.Router();

// /api route
router.get('/gits', function(req, res){
	res.render('api', {title: "The Beauty within the shell"});
});

module.exports = router;