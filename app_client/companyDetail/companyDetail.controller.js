(function () {

	angular.module('companyApp')
		.controller('companyDetailCtrl', companyDetailCtrl);

	function companyDetailCtrl(){

		var vm = this;

		vm.pageHeader = {
			name: "Details Page"
		};
		
	}

} ) () ;