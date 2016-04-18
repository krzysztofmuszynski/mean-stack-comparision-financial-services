(function(){

	angular.module('companyApp')
		.service('currencyFairDetailData', currencyFairDetailData);

	function currencyFairDetailData($http) {

		return $http.get('/api/company/57150d75238d08601d57376b');

	}

}) () ;