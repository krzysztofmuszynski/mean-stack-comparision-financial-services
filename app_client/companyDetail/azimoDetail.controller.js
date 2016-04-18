(function () {

	angular.module('companyApp')
		.controller('azimoDetailCtrl', azimoDetailCtrl);

	function azimoDetailCtrl($scope,azimoDetailData) {

		var vm = $scope;
		
		azimoDetailData
			.success(function(data){
				vm.data = {company: data};
			})
			.error(function(error){
				console.log(error);
			});

	}

} ) () ;