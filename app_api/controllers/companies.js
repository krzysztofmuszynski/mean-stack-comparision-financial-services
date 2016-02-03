//include the model

var mongoose = require('mongoose');
var Companies = mongoose.model('Companies');


//placeholder function
var sendJsonRespons = function(res, status, content){
	res.status(status);
	res.json(content);
}

//controllers for companies API
module.exports.companiesListByRate = function(req,res){};

module.exports.companiesCreate = function(req,res){
	sendJsonRespons(res, 200, {"status": "success"});
};

module.exports.companiesReadOne = function(req,res){
	sendJsonRespons(res, 200, {"status": "success"});
};

module.exports.companiesUpdateOne = function(req,res){};

module.exports.companiesDeleteOne = function(req,res){};