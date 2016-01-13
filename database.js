var mongoose = require('mongoose');
var Schema	 = mongoose.Schema;

var Pokemon = new Schema()({
		nationalNo: Number,
		type: [String],
		name: String,
		species: String,
		height: Number,
		weight: Number,
		abilities: [String]
	});

mongoose.model('pokemon', Pokemon);

mongoose.connect('mongodb://localhost/node-pokemon');