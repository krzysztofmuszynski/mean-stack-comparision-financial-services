(function(){

	angular.module('companyApp')
		.service('torFxDetailData', torFxDetailData);

	function torFxDetailData($http) {

		return $http.get('/api/company/5715117f7bf348c4245f983f');

	}

}) () ;