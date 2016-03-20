var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/transferCompare';
if(process.env.NODE_ENV==='production'){
	dbURI=process.env.MONGOLAB_URI;
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err){
	console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected');
});

//App terminates
var gracefulShotdown = function(msg, callback){
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

//For nodemon restarts
process.once('SIGUSR2', function(){
	gracefulShotdown('nodemon restart', function(){
		process.kill(process.pid, 'SIGUSR2');
	});
});

//For app termination
process.on('SIGINT', function(){
	gracefulShotdown('app termination', function(){
		process.exit(0);
	});
});

//For Heroku app termination
process.on('SIGTERM', function(){
	gracefulShotdown('Heroku app termination', function(){
		process.exit(0);
	});
});

require('./companies');
require('./companiesCompare');
require('./users');