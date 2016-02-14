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
		},
		//company Name:
		transfer01: 
		{
					name: 'TransferWise',
					imgSrc: '/images/transferwise.jpg',
					imgAlt: 'TransferWise Logo',
					currencyRate: '5,8989 PLN',
					fee: 'brak',
					amount: '5865,90 PLN',
					loss: 'brak',
					realRate: '5,8659 PLN',
					update: '14.01.2016',
					rating: 4
		},
		transfer02: 
		{
					name: 'TransferWise',
					imgSrc: '/images/transferwise.jpg',
					imgAlt: 'TransferWise Logo',
					currencyRate: '5,8989 PLN',
					fee: '£5',
					amount: '5798,66 PLN',
					loss: '29,14 PLN',
					realRate: '5,79866 PLN',
					update: '14.01.2016',
					rating: 4
		},
		transfer03: 
		{
					name: 'CurrencyFair',
					imgSrc: '/images/currencyfair.png',
					imgAlt: 'CurrencyFair Logo',
					currencyRate: '5,797 PLN',
					fee: 'brak',
					amount: '5797 PLN',
					loss: '30,80 PLN',
					realRate: '5,797 PLN',
					update: '14.01.2016',
					rating: 5
		},
		transfer04: 
		{
					name: 'TransferGo',
					imgSrc: '/images/transfergo.jpg',
					imgAlt: 'TransferGo Logo',
					currencyRate: '5,77155 PLN',
					fee: 'brak',
					amount: '5771,55 PLN',
					loss: '56,25 PLN',
					realRate: '5,77155 PLN',
					update: '14.01.2016',
					rating: 5
		},
		transfer05: 
		{
					name: 'TransferGo',
					imgSrc: '/images/transfergo.jpg',
					imgAlt: 'TransferGo Logo',
					currencyRate: '5,77155 PLN',
					fee: '£1.99',
					amount: '5760,06 PLN',
					loss: '67,74 PLN',
					realRate: '5,76006  PLN',
					update: '14.01.2016',
					rating: 5
		},
		transfer06: 
		{
					name: 'TorFX',
					imgSrc: '/images/torfx.jpg',
					imgAlt: 'TorFX Logo',
					currencyRate: '5,7591 PLN',
					fee: 'brak',
					amount: '5759,10 PLN',
					loss: '68,70 PLN',
					realRate: '5,7591 PLN',
					update: '14.01.2016',
					rating: 3
		},
		transfer07: 
		{
					name: 'Azimo',
					imgSrc: '/images/azimo.jpg',
					imgAlt: 'Azimo Logo',
					currencyRate: '5,7553 PLN',
					fee: '£2.99',
					amount: '5738,09 PLN',
					loss: '89.71 PLN',
					realRate: '5,73809 PLN',
					update: '14.01.2016',
					rating: 2
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