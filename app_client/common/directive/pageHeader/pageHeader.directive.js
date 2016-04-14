(function () { 

	angular.module('companyApp')
		.directive('pageHeader', pageHeader);

	function pageHeader(){

		return {

			restrict: 'EA',
			templateUrl: '/common/directive/pageHeader/pageHeader.template.html'

		};

	}

} ) () ;