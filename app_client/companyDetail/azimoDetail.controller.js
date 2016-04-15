(function () {

	angular.module('companyApp')
		.controller('azimoDetailCtrl', azimoDetailCtrl);

	function azimoDetailCtrl() {

		var vm = this;

		vm.main = {
			content: 'To jest strona o firmie Azimo'
		};

	}

} ) () ;