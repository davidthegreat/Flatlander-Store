(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.product = gem;
	})
	var gem = {
		name: "rock",
		price: 3.09,
		description: "hard and round",
	}
})();