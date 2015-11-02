//change jewelry names 
//embed photos 2 thru n in photo 1

var app = angular.module('kasDesign');

app.controller('ringsController', function ($scope) {
	    //.object
	$scope.rings= 
	[
		{
	   //property:
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringA5.jpg", 
			text: "Veliki"
		// },{
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringHillman7.jpg",
		// 	text: "Novgorod1"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringHillman1.jpg",
			text: "Novgorod"

		// },{ 	
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringTer1.jpg",
		// 	text: "Alekseyevna1"	
		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringTer.jpg",
			text: "Alekseyevna"
		// },{
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringTer17.jpg",
		// 	text: "Alekseyevna3"

		// },{	
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringTer12.jpg",
		// 	text: "Alekseyevna4"
		// },{
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringTer8.jpg",
		// 	text: "Alekseyevna5"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringNg6.jpg",
			text: "Kirov"

		// },{	
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringBooher6.jpg",
		// 	text: "Belgorod1"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringBooher5.jpg",
			text: "Belgorod"
		// },{
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringBooher4.jpg",
		// 	text: "Belgorod3"

		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringAlonto2.jpg",
			text: "Kaluga"		
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringOval.jpg",
			text: "Angarsk"
		// },{
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringSk6.jpg",
		// 	text: "Angarsk2"
		},{
		
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringNorman2.jpg",
			text: "Agruz"
		// },{	
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringLand3.jpg",
		// 	text: "Amursk1"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringLandrum1.jpg",
			text: "Amursk"

		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringHuntere.jpg",
			text: "Alzamar"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringJ4.jpg",
			text: "Sofia"
		// },{
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringJ5.jpg",
		// 	text: "Sofia2"

		// },{
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringMah10.jpg",
		// 	text: "Valentina1"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringMaholik6.jpg",
			text: "Valentina"
		// },{
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringMah5.jpg",
		// 	text: "Valentina3"

		// },{	
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringMm5.jpg",
		// 	text: "Eva1"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringMiller9.jpg",
			text: "Eva"
		// },{	
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringMm2.jpg",
		// 	text: "Eva3"

		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringSeremet5.jpg",
			text: "Klementina"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringPaine1.jpg",
			text: "Rada"
		// },{	
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringPaine2.jpg",
		// 	text: "Rada2"

		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringBrianj3.jpg",
			text: "Vera"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringShaw5.jpg",
			text: "Renata"
		// },{	
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringShaw7.jpg",
		// 	text: "Renata2"
			
		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringSk9.jpg",
			text: "Anna"
		// },{	
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringSk1.jpg",
		// 	text: "Emma1"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringSk5.jpg",
			text: "Vasilisa"

		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringVU8.jpg",
			text: "Victoria"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringTadlock3.jpg",
			text: "Yana"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringReff27.jpg",
			text: "Yulia"

		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringTt1.jpg",
			text: "Darya"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringHalo1.jpg",
			text: "Dominika"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringVw11.jpg",
			text: "Zhanna"

		// },{	
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringVz6.jpg",
		// 	text: "Vz1"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringVz4.jpg",
			text: "Inessa"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringPlaskota6.jpg",
			text: "Plaskota"

		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringSwope14.jpg",
			text: "Anastasia"
		// },{	
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringSwope7.jpg",
		// 	text: "Anastasia2"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringIrwin4.jpg",
			text: "Kapitolina"

		},{		
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringFrank9.jpg",
			text: "Lidiya"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringMurillo7.jpg",
			text: "Loshad"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringMitchell%2C+Steven1.jpg",
			text: "Andreyevna"

		// },{
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringJohnson11.jpg",
		// 	text: "Johnson1"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringJohnson6.jpg",
			text: "Malvina"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringDr4.jpg",
			text: "Olesya"

		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringRutter13.jpg",
			text: "Florentina"
		// },{
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringRutter16.jpg",
		// 	text: "Rutter2"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringJl7.jpg",
			text: "Emma"

		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringRr10.jpg",
			text: "Siniy"
		// },{	
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringRr11.jpg",
		// 	text: "Rr2"
		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringPost1.jpg",
			text: "Alisa"

		},{	
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringEmerald6.jpg",
			text: "Polina"
		// },{
		// 	image: "https://s3.amazonaws.com/sekjewelry/rings/ringEmerald3.jpg",
		// 	text: "Emerald2"
		},{
			image: "https://s3.amazonaws.com/sekjewelry/rings/ringMq6.jpg",
			text: "Rozalina"
		}
	]
});