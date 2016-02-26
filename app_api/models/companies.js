var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companyInfoSchema = new Schema({

		siteTitle: {type: String, required: true},
		companyName: {type: String, required: true},
		websiteAddress: {type: String, required: true},
		imgSrc: {type: String, required: true},
		incorporatedDate: {type: String, required: true},
		manager: {type: String, required: true},
		role: String,
		activity: String,
		sector: String,
		typeCompany: String,
		address: {type: String, required: true},
		coords: {type: [Number], index: '2dsphere'},
		formAddress: {type: String, required: true}

});

var companyReviewSchema = new Schema({
			
	author: {type: String, required: true},

	reviewText: {type: String, required: true},
	date: {type: Date, 'default': Date.now},
	rating: {type: Number, 'default': 0, min: 0, max: 5}

});

var companiesOfferSchema = new Schema({
	companyName: String,
	imgSrc: String,
	imgAlt: String,
	currencyRate: String,
	fee: String,
	amount: String,
	loss: String,
	realRate: String,
	update: String,
	rating: {type: Number, 'default': 0, min: 0, max: 5},
	createdOn: { type: Date, default: Date.now },
	modifiedOn: Date
});

var companiesSchema = new Schema({

	title: String,
	pageHeader: {
		title: String,
		subtitle: String
	},
	rankingHeader: {
		title: String,
		description: String,
		companyName: String,
		currencyRate: String,
		fee: String,
		amount: String,
		loss: String,
		realRate: String,
		update: {type: Date, default: Date.now},
		rating: String
	}

	// mainTitle: String,
	// pageHeaderTitle: String,
	// pageHeaderSubtitle: String,
	// rankHeadTitle: String,
	// rankHeadDesc: String,
	// rankHeadCompName: String,
	// rankHeadCurrRate: String,
	// rankHeadFee: String,
	// rankHeadAmount: String,
	// rankHeadLoss: String,
	// rankHeadRealRate: String,
	// rankHeadUpdate: String,
	// rankHeadRating: String

	// companyInfo: [companyInfoSchema],

	// companyReview: [companyReviewSchema]

});

// Compiling mongoose schemas into model

mongoose.model('Companies', companiesSchema, 'companies');

mongoose.model('CompaniesOffer', companiesOfferSchema, 'companies');