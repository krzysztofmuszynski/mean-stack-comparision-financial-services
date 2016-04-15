(function () {

	angular.module('companyApp', ['ngRoute', 'ngSanitize']);

	function config($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'home/home.view.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			})
			.when('/onas', {
				templateUrl: 'common/views/onas.view.html',
				controller: 'onasCtrl',
				controllerAs: 'vm'
			})
			.when('/firmy', {
				templateUrl: 'common/views/firmy.view.html',
				controller: 'firmyCtrl',
				controllerAs: 'vm'
			})
			.when('/Azimo', {
				templateUrl: 'companyDetail/azimoDetail.view.html',
				controller: 'azimoDetailCtrl',
				controllerAs: 'vm'
			})
			.when('/CurrencyFair', {
				templateUrl: 'companyDetail/currencyFairDetail.view.html',
				controller: 'currencyFairDetailCtrl',
				controllerAs: 'vm'
			})
			.when('/TorFX', {
				templateUrl: 'companyDetail/torFxDetail.view.html',
				controller: 'torFxDetailCtrl',
				controllerAs: 'vm'
			})
			.when('/TransferGo', {
				templateUrl: 'companyDetail/transferGoDetail.view.html',
				controller: 'transferGoDetailCtrl',
				controllerAs: 'vm'
			})
			.when('/TransferWise', {
				templateUrl: 'companyDetail/transferWiseDetail.view.html',
				controller: 'transferWiseDetailCtrl',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});
			
			//Enabling the HTML5 history API
			$locationProvider.html5Mode({
				enabled: true,
  			requireBase: false
			});
	}

	angular
		.module('companyApp')
		.config(['$routeProvider', '$locationProvider', config]);

}) () ;