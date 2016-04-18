(function() {

	angular.module('companyApp')
		.controller('torFxDetailCtrl', torFxDetailCtrl);

	function torFxDetailCtrl($scope,torFxDetailData){

		var vm = $scope;

		torFxDetailData
			.success(function(data){
				vm.data = {company: data};
			})
			.error(function(error){
				console.log(error);
			})

	}

} ) () ;