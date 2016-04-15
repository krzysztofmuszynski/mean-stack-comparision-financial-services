(function() {

	angular.module('companyApp')
		.controller('firmyCtrl', firmyCtrl);

	function firmyCtrl(){

		var vm = this;

		return vm.main = {
			content: ''
		};

	}

} ) () ;