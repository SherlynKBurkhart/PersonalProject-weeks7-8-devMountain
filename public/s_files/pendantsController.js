//embed photos 2 thru n in photo 1


var app = angular.module('kasDesign');

app.controller('pendantsController', function($scope){ 

	$scope.pendants= [

		{
			image: "https://s3.amazonaws.com/sekjewelry/pendants/pendantBb2.jpg",
			text: "Tatyana"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/pendants/pendantRoberson2.jpg",
			text: "Daria"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/pendants/pendantMmf2.jpg",
			text: "Dasha"

		},{
			image: "https://s3.amazonaws.com/sekjewelry/pendants/pendantHarris+1.jpg",
			text: "Yekatarinburg1"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/pendants/pendantHarris+3.jpg",
			text: "Yekatarinburg2"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/pendants/pendantHunter++3.jpg",
			text: "Irkutsk"
			
		},{
			image: "https://s3.amazonaws.com/sekjewelry/pendants/pendantRutter1.jpg",
			text: "Novosebirsk"
		}

	]
});		