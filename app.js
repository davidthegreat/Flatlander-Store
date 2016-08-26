(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	})
	var gems = [
	{
		name: "rock",
		price: 3.09,
		description: "hard and round",
		canPurchase: false,
		soldOut: false,
	},
	{
		name: "rock3",
		price: 3.09,
		description: "hard and round",
		canPurchase: true,
		soldOut: false,
	}
	]
})();