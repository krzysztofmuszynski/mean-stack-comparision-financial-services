//include the model

var mongoose = require('mongoose');
var Company = mongoose.model('Companies');

//placeholder function
var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

String.prototype.toObjectId = function() {
  var ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
};

//controllers for companies API
module.exports.companiesOfferList = function(req,res){
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
			mainTitle: req.body.mainTitle,
			pageHeaderTitle: req.body.pageHeaderTitle,
			pageHeaderSubtitle: req.body.pageHeaderSubtitle,
			rankHeadTitle: req.body.rankHeadTitle,
			rankHeadDesc: req.body.rankHeadDesc,
			rankHeadCompName: req.body.rankHeadCompName,
			rankHeadCurrRate: req.body.rankHeadCurrRate,
			rankHeadFee: req.body.rankHeadFee,
			rankHeadAmount: req.body.rankHeadAmount,
			rankHeadLoss: req.body.rankHeadLoss,
			rankHeadRealRate: req.body.rankHeadRealRate,
			rankHeadUpdate: req.body.rankHeadUpdate,
			rankHeadRating: req.body.rankHeadRating
		}, function(err, company){
			if(err){
				sendJsonResponse(res, 400, {"message": "Ups, something gone wrong!"});
				return;
			} else {
				sendJsonResponse(res, 200, company);
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
	if(!req.params.companyid){
		sendJsonResponse(res, 404, {"message": "Not found, companyid is required"});
		return;
	}
	Company
		.findById(req.params.companyid)
		.exec(function(err, company){
			if(!company){
				sendJsonResponse(res, 404, {"message": "Company id not found"});
				return;
			} else if(err) {
				sendJsonResponse(res, 400, err);
				return;
			}

				company.mainTitle = req.body.mainTitle;
				company.pageHeaderTitle = req.body.pageHeaderTitle;
				company.pageHeaderSubtitle = req.body.pageHeaderSubtitle;
				company.rankHeadTitle = req.body.rankHeadTitle;
				company.rankHeadDesc = req.body.rankHeadDesc;
				company.rankHeadCompName = req.body.rankHeadCompName;
				company.rankHeadCurrRate = req.body.rankHeadCurrRate;
				company.rankHeadFee = req.body.rankHeadFee;
				company.rankHeadAmount = req.body.rankHeadAmount;
				company.rankHeadLoss = req.body.rankHeadLoss;
				company.rankHeadRealRate = req.body.rankHeadRealRate;
				company.rankHeadUpdate = req.body.rankHeadUpdate;
				company.rankHeadRating = req.body.rankHeadRating;

			company.save(function(err, company){
				if(err){
					sendJsonResponse(res, 400, err);
				} else {
					sendJsonResponse(res, 200, company);
				}
			});
		});
};

module.exports.companiesDeleteOne = function(req,res){
	var companyid = req.params.companyid;
	if(companyid){
		Company
			.findByIdAndRemove(companyid)
			.exec(function(err,company){
				if(err){
					sendJsonResponse(res, 404, err);
					return;
				} else {
					sendJsonResponse(res, 204, null);
				}
			});
	} else {
		sendJsonResponse(res, 404, {"message": "No companyid"});
	}
};

