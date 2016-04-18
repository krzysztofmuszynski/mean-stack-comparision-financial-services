var mongoose = require('mongoose');

var CompanyDetails = mongoose.model('CompaniesDetails');

var sendJsonResponse = function(res,status,content){
	res.status(status);
	res.json(content);
};

module.exports.companiesDetailsReadAll = function(req,res){
	if(req.params){
		CompanyDetails
			.find(req.params)
			.exec(function(err,details){
				if(!details){
					sendJsonResponse(res, 404, {'message': "Company details not found!"});
					return;
				} else if(err){
					sendJsonResponse(res, 400, err);
					return;
				}
				sendJsonResponse(res, 200, details);
				return;
			});
	} else {
		sendJsonResponse(res, 404, {"message": "No company details id in request!"});
	}
};

module.exports.companiesDetailsReadOne = function(req,res){
	if(req.params && req.params.companyid){
		CompanyDetails
			.findById(req.params.companyid)
			.exec(function(err,details){
				if(!details){
					sendJsonResponse(res, 404, {"message": "Sorry We can not find this company details ID"});
					return;
				} else if (err){
					sendJsonResponse(res, 400, err);
					return;
				}
				sendJsonResponse(res, 200, details);
			});
	} else {
		sendJsonResponse(res, 404, {"message": "No company details id in the request"});
	}
};

module.exports.companiesDetailsCreateOne = function(req,res){
	CompanyDetails
		.create({
			companyName: req.body.companyName,
			companyWebSite: req.body.companyWebSite,
			incorporatedDate: req.body.incorporatedDate,
			managmentName: req.body.managmentName,
			managmentRole: req.body.managmentRole,
			area: req.body.area,
			sector: req.body.sector,
			category: req.body.category,
			minTransfer: req.body.minTransfer,
			currency: req.body.currency,
			address: req.body.address,
			latitude: req.body.latitude,
			longitude: req.body.longitude
		}, function(err,details){
			if(err){
				sendJsonResponse(res, 404, {"message": "Upps, something gone wrong!"})
				return;
			} else if(details){
				sendJsonResponse(res, 200, details);
			}
		});
};

module.exports.companiesDetailsUpdateOne = function(req,res){
	if(!req.params.companyid){
		sendJsonResponse(res,404,{"message":"Company id not found!"});
		return;
	}
	CompanyDetails
		.findById(req.params.companyid)
		.exec(function(err,details){
			if(!details){
				sendJsonResponse(res, 404, {"message": "Company id not found!"});
				return;
			} else if(err){
				sendJsonResponse(res, 400, err);
				return;
			}
			details.companyName = req.body.companyName;
			details.companyWebSite = req.body.companyWebSite;
			details.incorporatedDate = req.body.incorporatedDate;
			details.managmentName = req.body.managmentName;
			details.managmentRole = req.body.managmentRole;
			details.area = req.body.area;
			details.sector = req.body.sector;
			details.category = req.body.category;
			details.minTransfer = req.body.minTransfer;
			details.currency = req.body.currency;
			details.address = req.body.address;
			details.latitude = req.body.latitude;
			details.longitude = req.body.longitude;
			createdOn = req.body.createdOn;
			modifiedOn = req.body.modifiedOn;

			details.save(function(err,details){
				if(err){
					sendJsonResponse(res, 400, err);
					return;
				} else {
					sendJsonResponse(res, 200, details);
				}
			});
		});
};

module.exports.companiesDetailsDeleteOne = function(req,res){
	var companyid = req.params.companyid;
	if(companyid){
		CompanyDetails
			.findByIdAndRemove(companyid)
			.exec(function(err,details){
				if(err){
					sendJsonResponse(res, 400, err);
					return;
				} else {
					sendJsonResponse(res, 200, details);
				}
			});
	}
};