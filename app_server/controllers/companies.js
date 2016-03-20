// GET THE API DATA

var request = require('request');

var apiOptions = {
	server: "http://localhost:3000"
};

if(process.env.NODE_ENV==='production'){
	apiOptions.server="";
}

var renderHomepage = function(req,res,responseBody){
	var message;
  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No places found nearby";
    }
  }
	res.render('companies-list', {
		companies: responseBody,
		message: message
	});
}

// GET 'home' page
module.exports.homelist = function (req, res) {
	res.render('companies', {
		title: 'Porównywarka przelewów zagranicznych',
		pageHeader: {
			title: 'Poniewaz nikt nie lubi przeplacac przygotowalismy zestawienie najtanszych przelewow zagranicznych. Mam nadzieje, ze dzieki temu uda sie Tobie zaoszczedzic spora sume pieniedzy.',
			subtitle: 'Zestawienie znajdziesz ponizej.'
		},
		rankingHeader: {
			title: 'Ranking przelewow zagranicznych z Wielkiej Brytanii do Polski',
			description: 'Aktualne porownanie: kwota przelewu 1000 funtow',
			companyName: 'Nazwa firmy',
			currencyRate: 'Kurs wymiany',
			fee: 'Oplata',
			amount: 'Kwota za 1000',
			loss: 'Strata',
			realRate: 'Rzecz. kurs',
			update: 'Aktualizacja',
			rating: 'Opinie klient wg. Trustpilot'
		}
	});
};

// GET 'company info' page
module.exports.companyInfo = function (req,res) {
	res.render('company-info', 
	{
		// _id: ObjectId(),
		title: 'Company info',
		pageHeader: {
			companyName: 'TransferGo',
			websiteAddress: 'www.transfergo.com',
			imgSrc: '/images/transfergo.jpg'
		},

		companyDetails: {
			incorporatedDate: '18.01.2012',
			manager: 'Daumantas Dvilinskas',
			role: 'Co-Founder and CEO',
			activity: 'Finanse',
			sector: 'Banki',
			type: 'Prywatna',
			address: 'One Canada Square Level 49, Canary Wharf, London E14 5AB, United Kingdom',
			coords: 
			{
				latitude: 51.5048458,
				longitude: -0.0218651
			},
			formAddress: '/company/review/new'
		},

		companyReview: [
		{
			// _id: ObjectId(),
			author: 'Lukasz Maciejewski',
			reviewText: 'Przelew zostal zrealizowany expresowo, Pieniadze byly na koncie nastepnego dnia. Super polecam.',
			date: new Date('June 01 2015'),
			rating: 3
		},
		{
			author: 'Bogdan Smolen',
			reviewText: 'Slaba obsluga przelew dotarl po 5 dniach',
			date: '12.01.2016',
			rating: 1
		},
		{
			author: 'Leszek Foka',
			reviewText: 'Super super nie ma lepszej firmy.',
			date: '21.01.2016',
			rating: 5
		}
		]
	});
};

// GET 'addReview' page
module.exports.addReview = function (req,res) {
	res.render('company-review-form', {
		title: 'Dodaj opinie o firmie',
		pageHeader: {title: 'TransferGo'},
		user: {displayName: 'Lukasz Maciejewski'}
	});
};