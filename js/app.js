(function() {
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Some gems have hidden qualities beyond their luster, \
			beyond their shine...Dodeca is one of those gems.',
			images: [
			  "http://placehold.it/200x100",
			  "http://placehold.it/100x99", 
			  "http://placehold.it/100x98"
			],
			canPurchase: true,
			soldOut: false,

		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: 'This wondrous piece of metal is the pride and joy of \
			the Valkyria Clan.',
			images: [
			  "http://placehold.it/200x100",
			  "http://placehold.it/100x99", 
			  "http://placehold.it/100x98"
			],
			canPurchase: true,
			soldOut: false,
		}
	];

})();