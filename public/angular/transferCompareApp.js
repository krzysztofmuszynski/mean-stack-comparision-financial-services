var companyListCtrl = function($scope,companyCompareData){
	companyCompareData
		.success(function(data){
			$scope.data = {companies: data};
		})
		.error(function(error){
			console.log(error);
		});
};

var ratingStars = function() {
	return {
		scope: {
			thisRating: '=rating'
		},
		templateUrl: '/angular/rating-stars.html'
	};
};

var companyCompareData = function($http){

	return $http.get('/api/companies');

};

angular
	.module('companyApp', [])
	.controller('companyListCtrl', companyListCtrl)
	.directive('ratingStars', ratingStars)
	.service('companyCompareData', companyCompareData);