var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	userName: String
});

mongoose.model('User', userSchema);