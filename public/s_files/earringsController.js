//embed photos 2 thru n in photo 1


var app = angular.module('kasDesign');

app.controller('earringsController', 
	function($scope, Lightbox
){
	$scope.earrings = [
		{
			image: "https://s3.amazonaws.com/sekjewelry/earrings/earringsBianco3.jpg",
			text: "Samara1"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/earrings/earringsBianco2.jpg",
			text: "Samara2"
		}
	];
	
	$scope.openLightboxModal = function(index) {
		Lightbox.openModal($scope.earrings, index);
	};
}); 

