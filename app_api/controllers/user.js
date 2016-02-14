var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
}

String.prototype.toObjectId = function() {
  var ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
};

module.exports.userReadAll = function(req,res){


	
};

module.exports.userCreate = function(req,res){

	User.
		create({
			userName: req.body.userName
		}, function(err, user){
			if(err){
				sendJsonResponse(res, 400, {"message": "Ups, something goes wrong!"});
			} else {
				sendJsonResponse(res, 201, user);
			}
		});

};

module.exports.userReadOne = function(req,res){};

module.exports.userUpdateOne = function(req,res){};

module.exports.userDeleteOne = function(req,res){};