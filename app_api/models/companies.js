var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companyInfoSchema = new mongoose.Schema({

		siteTitle: {type: String, required: true},
		// companyName: {type: String, required: true},
		// websiteAddress: {type: String, required: true},
		// imgSrc: {type: String, required: true},
		// incorporatedDate: {type: String, required: true},
		// manager: {type: String, required: true},
		// role: String,
		// activity: String,
		// sector: String,
		// typeCompany: String,
		// address: {type: String, required: true},
		// coords: {type: [Number], index: '2dsphere'},
		// formAddress: {type: String, required: true}

});

var companyReviewSchema = new mongoose.Schema({
			
			author: {type: String, required: true},

			reviewText: {type: String, required: true},
			date: {type: Date, 'default': Date.now},
			rating: {type: Number, 'default': 0, min: 0, max: 5}

});

var companiesSchema = new mongoose.Schema({

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
			update: String,
			rating: String
		},
		
		// transfer01: 
		// {
		// 			name: {type: String, required: true},
		// 			imgSrc: {type: String, required: true},
		// 			imgAlt: {type: String, required: true},
		// 			currencyRate: {type: String, required: true},
		// 			nofee: String,
		// 			amount: String,
		// 			loss: String,
		// 			realRate: String,
		// 			update: String,
		// 			rating: {type: Number, 'default': 0, min: 0, max: 5}
		// },
		// transfer02: 
		// {
		// 			name: {type: String, required: true},
		// 			imgSrc: {type: String, required: true},
		// 			imgAlt: {type: String, required: true},
		// 			currencyRate: {type: String, required: true},
		// 			nofee: String,
		// 			amount: String,
		// 			loss: String,
		// 			realRate: String,
		// 			update: String,
		// 			rating: {type: Number, 'default': 0, min: 0, max: 5}
		// },
		// transfer03: 
		// {
		// 			name: {type: String, required: true},
		// 			imgSrc: {type: String, required: true},
		// 			imgAlt: {type: String, required: true},
		// 			currencyRate: {type: String, required: true},
		// 			nofee: String,
		// 			amount: String,
		// 			loss: String,
		// 			realRate: String,
		// 			update: String,
		// 			rating: {type: Number, 'default': 0, min: 0, max: 5}
		// },
		// transfer04: 
		// {
		// 			name: {type: String, required: true},
		// 			imgSrc: {type: String, required: true},
		// 			imgAlt: {type: String, required: true},
		// 			currencyRate: {type: String, required: true},
		// 			nofee: String,
		// 			amount: String,
		// 			loss: String,
		// 			realRate: String,
		// 			update: String,
		// 			rating: {type: Number, 'default': 0, min: 0, max: 5}
		// },
		// transfer05: 
		// {
		// 			name: {type: String, required: true},
		// 			imgSrc: {type: String, required: true},
		// 			imgAlt: {type: String, required: true},
		// 			currencyRate: {type: String, required: true},
		// 			nofee: String,
		// 			amount: String,
		// 			loss: String,
		// 			realRate: String,
		// 			update: String,
		// 			rating: {type: Number, 'default': 0, min: 0, max: 5}
		// },
		// transfer06: 
		// {
		// 			name: {type: String, required: true},
		// 			imgSrc: {type: String, required: true},
		// 			imgAlt: {type: String, required: true},
		// 			currencyRate: {type: String, required: true},
		// 			nofee: String,
		// 			amount: String,
		// 			loss: String,
		// 			realRate: String,
		// 			update: String,
		// 			rating: {type: Number, 'default': 0, min: 0, max: 5}
		// },
		// transfer07: 
		// {
		// 			name: {type: String, required: true},
		// 			imgSrc: {type: String, required: true},
		// 			imgAlt: {type: String, required: true},
		// 			currencyRate: {type: String, required: true},
		// 			nofee: String,
		// 			amount: String,
		// 			loss: String,
		// 			realRate: String,
		// 			update: String,
		// 			rating: {type: Number, 'default': 0, min: 0, max: 5}
		// },

		// companyInfo: [companyInfoSchema],

		// companyReview: [companyReviewSchema]

});

// Compiling mongoose schemas into model

mongoose.model('Companies', companiesSchema);