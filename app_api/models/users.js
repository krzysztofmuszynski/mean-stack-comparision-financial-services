var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usersSchema = new mongoose.Schema({
	userName: String
});

mongoose.model('Users', usersSchema);