var mongoose = require('mongoose');

var CompanyCompare = mongoose.model('CompaniesCompare');

var sendJsonResponse = function(res,status,content){
	res.status(status);
	res.json(content);
};

// Offers

module.exports.offerReadAll = function(req,res){
	if(req.params){
		CompanyCompare
			.find(req.params)
			.exec(function(err, offer){
				if(!offer){
					sendJsonResponse(res, 404, {"message": "Company offer not found!"});
					return;
				} else if(err){
					sendJsonResponse(res, 400, err);
					return;
				}
				sendJsonResponse(res, 200, offer);
			});
	} else {
		sendJsonResponse(res, 404, {"message": "No companyid in request"});
	}
};

module.exports.offerCreateOne = function(req,res){
	CompanyCompare
		.create({
			name: req.body.name,
			imgSrc: req.body.imgSrc,
			imgAlt: req.body.imgAlt,
			currencyRate: req.body.currencyRate,
			fee: req.body.fee,
			amount: req.body.amount,
			loss: req.body.loss,
			realRate: req.body.realRate,
			update: req.body.update,
			rating: req.body.rating,
			createdOn: req.body.createdOn,
			modifiedOn: req.body.modifiedOn
			}, function(err, company){
				if(err){
					sendJsonResponse(res, 400, {"message": "Ups, something gone wrong!"});
					return;
				} else {
					sendJsonResponse(res, 200, company);
				}
		});
};

module.exports.offerReadOne = function(req,res){
	if(req.params && req.params.offerid){
		CompanyCompare
		.findById(req.params.offerid)
		.exec(function(err,offer){
			if (!offer){
				sendJsonResponse(res, 404, {"message": "Sorry We can not find this company offer ID"});
				return;
			} else if (err){
				sendJsonResponse(res, 400, err);
				return;
			}
			sendJsonResponse(res, 200, offer);
		});
		} else {
			sendJsonResponse(res, 404, {"message": "No company offer id in the request"});
	}
};

module.exports.offerUpdateOne = function(req,res){
	if(!req.params.offerid){
		sendJsonResponse(res, 404, {"message": "Offer id not found"});
		return;
	}
	CompanyCompare
		.findById(req.params.offerid)
		.exec(function(err, offer){
			if(!offer){
				sendJsonResponse(res, 404, {"message": "Offer id not found"});
				return;
			} else if(err){
				sendJsonResponse(res, 400, err);
				return;
			}

				offer.name = req.body.name;
				offer.imgSrc = req.body.imgSrc;
				offer.imgAlt = req.body.imgAlt;
				offer.currencyRate = req.body.currencyRate;
				offer.fee = req.body.fee;
				offer.amount = req.body.amount;
				offer.loss = req.body.loss;
				offer.realRate = req.body.realRate;
				offer.update = req.body.update;
				offer.rating = req.body.rating;
				createdOn = req.body.createdOn;
				modifiedOn = req.body.modifiedOn;

			offer.save(function(err,offer){
				if(err){
					sendJsonResponse(res, 400, err);
				} else {
					sendJsonResponse(res, 200, offer);
				}
			});
	});
};

module.exports.offerDeleteOne = function(req,res){
	var offerid = req.params.offerid;
	if(offerid){
		CompanyCompare
		.findByIdAndRemove(offerid)
		.exec(function(err, offer){
			if(err){
				sendJsonResponse(res, 400, err);
			} else {
				sendJsonResponse(res, 200, offer);
			}
		});
	} else {
		sendJsonResponse(res, 404, {"message": "Offer id not found"});
	}
};