(function() {

	angular.module('companyApp')
		.controller('transferWiseDetailCtrl', transferWiseDetailCtrl);

	function transferWiseDetailCtrl($scope,transferWiseDetailData){

		var vm = $scope;

		transferWiseDetailData
			.success(function(data){
				vm.data = {company: data};
			})
			.error(function(error){
				console.log(error);
			});

	}

} ) () ;