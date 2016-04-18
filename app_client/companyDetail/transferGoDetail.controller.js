(function() {

	angular.module('companyApp')
		.controller('transferGoDetailCtrl', transferGoDetailCtrl);

	function transferGoDetailCtrl($scope, transferGoDetailData){

		var vm = $scope;

		transferGoDetailData
			.success(function(data){
				vm.data = {company: data};
			}).error(function(error){
				console.log(error);
			});

	}

} ) () ;