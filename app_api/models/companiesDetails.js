var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companiesDetailsSchema = new Schema({

	companyName: String,
	companyWebSite: String,
	incorporatedDate: String,
	managmentName: String,
	managmentRole: String,
	area: String,
	sector: String,
	category: String,
	minTransfer: String,
	currency: Number,
	address: String,
	latitude: Number,
	longitude: Number

});

mongoose.model('CompaniesDetails', companiesDetailsSchema);