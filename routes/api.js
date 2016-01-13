var express = require('express');
var router = express.Router();

// Getting model from mongoose db.
// model pokemond efined in database.js
var mongoose = require('mongoose');
var Pokemon = mongoose.model('pokemon');


// routes =======================================================

// /api route
// becomes /api/pokemon
router.get('/pokemon', function(req, res){
	// function finds all items from the mongo collection.
	Pokemon.find(function(err, pkmn){
		console.log(pkmn);
		res.render('api',
			{title: 'Pokemon API',
			pokemon: pkmn});
	});
});

// handle creation of pokemon from submitted form.
router.post('/pokemon', function(req, res){
	new Pokemon({
		num: req.body.num,
		type: req.body.type,
		name: req.body.name
	})
	.save(function(err, pokemon){
		console.log(pokemon);
		res.redirect('/api/pokemon')
	});
});

module.exports = router;