(function () {

	angular.module('companyApp', ['ngRoute']);

	function config($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: '/home/home.view.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			})
			.when('/about', {
				templateUrl: '/about/about.view.html',
				controller: 'aboutCtrl',
				controller: 'vm'
			})
			.when('/about-company', {
				templateUrl: '/about-company/about-company.view.html',
				controller: 'aboutCompanyCtrl',
				controllerAs: 'vm'
			})
			.when('/company-info', {
				templateUrl: '/company-info/company-info.view.html',
				controller: 'companyInfoCtrl',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});
	}

	angular
		.module('companyApp')
		.config(['$routeProvider', config]);

}) () ;