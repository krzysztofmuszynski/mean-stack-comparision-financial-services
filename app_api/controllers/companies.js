//include the model

var mongoose = require('mongoose');
var Company = mongoose.model('Companies');

//placeholder function
var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
}

String.prototype.toObjectId = function() {
  var ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
};

//controllers for companies API
module.exports.companiesListByRate = function(req,res){
	if(req.params){
		Company
		.find(req.params)
		.exec(function(err,company){
			if(!company){
				sendJsonResponse(res, 404, {
					"message": "Location url not found"
				});
				return;
			} else if(err){
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, company);
		});
	} else {
		sendJsonResponse(res, 404, {
			"message": "No locationid in request"
		});
	}
};

module.exports.companiesCreate = function(req,res){
	Company
		.create({
				title: req.body.title,
				pageHeader: {
					title: req.body.title,
					subtitle: req.body.subtitle
				},
				rankingHeader: {
					title: req.body.title,
					description: req.body.description,
					companyName: req.body.companyName,
					currencyRate: req.body.currencyRate,
					fee: req.body.fee,
					amount: req.body.amount,
					loss: req.body.loss,
					realRate: req.body.realRate,
					update: req.body.update,
					rating: req.body.rating
				}
				// companyName: req.body.companyName,
				// websiteAddress: req.body.websiteAddress,
				// imgSrc: req.body.imgSrc,
				// incorporatedDate: req.body.incorporatedDate,
				// manager: req.body.manager,
				// role: req.body.role,
				// activity: req.body.activity,
				// sector: req.body.sector,
				// typeCompany: req.body.typeCompany,
				// address: req.body.address,
				// coords: [parseFloat(req.body.latitude), parseFloat(req.body.longitude)],
				// formAddress: req.body.formAddress
		}, function(err, company){
			if(err){
				sendJsonResponse(res, 400, {"message": "Ups, something goes wrong!"});
				return;
			} else {
				sendJsonResponse(res, 201, company);
			}
		});
};

module.exports.companiesReadOne = function(req,res){
	if(req.params && req.params.companyid){
		Company
		.findById(req.params.companyid)
		.exec(function(err,company){
			if (!company){
				sendJsonResponse(res, 404, {"message": "Sorry We can not find this company ID"});
				return;
			} else if (err){
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, company);
		});
	} else {
		sendJsonResponse(res, 404, {"message": "No company id in the request"});
	}
};

module.exports.companiesUpdateOne = function(req,res){

};

module.exports.companiesDeleteOne = function(req,res){
	Company
	.findById(req.params.companyid)
	.exec(function(err,company){
		sendJsonResponse(res, 200, company);
	});
};