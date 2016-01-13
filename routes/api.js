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

// handle get requests to pokemon's individual pages.
// gets id from url and then queries the database for the pokemon 
// data and sends it to the view.
router.get('/pokemon/:id', function(req, res){
	var query = {"_id": req.params.id};
	Pokemon.findOne(query, function(err, pokemon){
		console.log(pokemon);
		res.render('pokemon',
			{title: 'Pokemon API - ' + pokemon.name,
			pokemon: pokemon});
	});
});

// handle put requests to update pokemon information on 
// pokemon's individual pages.
router.put('/pokemon/:id', function(req, res){
	var query = {"_id": req.params.id};
	var update = {
			name: req.body.name,
			num: req.body.num,
			type: req.body.type};
	var options = {new: true};
	Pokemon.findOneAndUpdate(query, update, options, function(err, pokemon){
		console.log(pokemon);
		res.render('pokemon',
			{title: 'Pokemon API - ' + pokemon.name, pokemon: pokemon});
	})
});

// handle delete requests to delete pokemon from db
// on pokemon's individual pages.
router.delete('/pokemon/:id', function(req, res){
	var query = {"_id": req.params.id};
	Pokemon.findOneAndRemove(query, function(err, pokemon){
		console.log(pokemon);
		res.redirect('/api/pokemon');
	});
});

module.exports = router;