angular.module('companyApp')
	.controller('homeCtrl', homeCtrl);

// var ratingStars = function() {
// 	return {
// 		scope: {
// 			thisRating: '=rating'
// 		},
// 		templateUrl: '/home/rating-stars.html'
// 	};
// };

function homeCtrl($scope, companyCompareData){
	companyCompareData
		.success(function(data){
			$scope.data = {companies: data};
			console.log($scope.data);
		})
		.error(function(error){
			console.log(error);
		});
}

