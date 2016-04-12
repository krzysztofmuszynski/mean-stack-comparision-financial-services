(function () {

	angular
		.module('companyApp')
		.service('companyCompareData', companyCompareData);

		function companyCompareData($http){
			return $http.get('/api/compare');
		}

}) () ;
