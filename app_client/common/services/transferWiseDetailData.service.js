(function(){

	angular.module('companyApp')
		.service('transferWiseDetailData', transferWiseDetailData);

	function transferWiseDetailData($http) {

		return $http.get('/api/company/5715161ef56074d013736e58');

	}

}) () ;