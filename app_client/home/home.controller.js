(function () { 
	
	angular.module('companyApp')
		.controller('homeCtrl', homeCtrl);

	function homeCtrl($scope, companyCompareData){

		var vm = $scope;

		companyCompareData
			.success(function(data){
				vm.data = {companies: data};
				// console.log($scope.data);
			})
			.error(function(error){
				console.log(error);
			});
	}

}) () ;