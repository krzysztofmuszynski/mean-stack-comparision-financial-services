var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companiesCompareSchema = new Schema({
	name: String,
	imgSrc: String,
	imgAlt: String,
	currencyRate: String,
	fee: String,
	amount: String,
	loss: String,
	realRate: String,
	update: { type: Date, default: Date.now },
	rating: {type: Number, 'default': 0, min: 0, max: 5},
	createdOn: { type: Date, default: Date.now },
	modifiedOn: Date
});

mongoose.model('CompaniesCompare', companiesCompareSchema);
