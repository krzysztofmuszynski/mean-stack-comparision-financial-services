(function () {

	angular.module('companyApp', ['ngRoute']);

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