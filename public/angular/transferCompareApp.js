var companyListCtrl = function($scope){
	$scope.data = { 
		companies: [
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
	]};
};

// angular
// 	.module('companyApp')
// 	.controller('companyListCtrl', companyListCtrl);

angular
	.module('companyApp', [])
	.controller('companyListCtrl', companyListCtrl);