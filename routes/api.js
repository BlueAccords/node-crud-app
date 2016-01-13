var express = require('express');
var router = express.Router();

// Getting model from mongoose db.
// model pokemond efined in database.js
var mongoose = require('mongoose');
var pokemon = mongoose.model('pokemon');


// routes =======================================================

// /api route
// becomes /api/pokemon
router.get('/pokemon', function(req, res){
	// function finds all items from the mongo collection.
	pokemon.find(function(err, pkmn){
		console.log(pkmn);
		res.render('api',
			{title: 'Pokemon API',
			pokemon: pkmn});
	});
});

// handle creation of pokemon
router.post('/pokemon', function(req, res){
	
	res.redirect('/api/pokemon');
});

module.exports = router;