(function() {

	angular.module('companyApp')
		.controller('currencyFairDetailCtrl', currencyFairDetailCtrl);

	function currencyFairDetailCtrl($scope,currencyFairDetailData){

		var vm = $scope;

		currencyFairDetailData
			.success(function(data){
				vm.data = {company: data};
			})
			.error(function(error){
				console.log(error);
			});

	}

} ) () ;