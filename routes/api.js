var express = require('express');
var router = express.Router();

// /api route
router.get('/gits', function(req, res){
	res.send('The beauty within the shell~');
});

module.exports = router;