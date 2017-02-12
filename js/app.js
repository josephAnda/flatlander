(function() {
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.products = gems;
	});
	app.controller('PanelController', function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}

	});
	var gems = [
		{
			name: 'Azurite',
			description: 'This gem has a mysterious blue glow that comes from a \
			steady surge of energy',
			shine: 9,
			price: 48.90,
			rarity: 6,
			color: '#EEE',
			faces: 12,
			images: [
			  
			],
			canPurchase: true,
			soldOut: false,
		},
		{
			name: 'Dodecahedron',
			
			description: 'Some gems have hidden qualities beyond their luster, \
			beyond their shine...Dodeca is one of those gems.',
			shine: 70,
			price: 27.95,
			rarity: 2,
			color: '#000',
			faces: 6,
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
			description: 'This wondrous piece of metal is the pride and joy of \
			the Valkyria Clan.',
			shine: 8,
    		price: 110.50,
    		rarity: 7,
    		color: '#CCC',
    		faces: 14,
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