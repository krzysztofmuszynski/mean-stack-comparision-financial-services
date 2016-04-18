(function(){

	angular.module('companyApp')
		.service('azimoDetailData', azimoDetailData);

	function azimoDetailData($http) {

		return $http.get('/api/company/5715088f044de008200336d4');

	}

}) () ;