(function(){

	angular.module('companyApp')
		.service('transferGoDetailData', transferGoDetailData);

	function transferGoDetailData($http) {

		return $http.get('/api/company/5714cef94f4f53ac1f86e1bf');

	}

}) () ;