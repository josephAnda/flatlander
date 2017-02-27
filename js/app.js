(function() {
	var app = angular.module('store', [ ]);
	
	app.controller('GalleryController', function() {
    	 this.current = 0;
	    this.setCurrent = function(value) {
	      	if (!value) { 
	      		this.current = 0; } 
	      	else {
	        	this.current = value;
	      	}
	    };
  	});
	
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

	app.controller("ReviewController", function() {

    	this.review = {};

    	this.addReview = function(product) {
    		this.review.createdOn = Date.now();
      		product.reviews.push(this.review);
      		this.review = {};
    	};
  	});

	//  To successfully implement the directive below, we need to figure out how to deal with the ReviewController logic within the productTabs.  
	//  this might be a trivial concern as this is just a demo project. 

	app.directive("productTabs", function() {
    	return {
      		restrict: 'E',
      		templateUrl: 'product-tabs.html',
      		controller: function() {
		        this.tab = 1;

		        this.isSet = function(checkTab) {
		          return this.tab === checkTab;
		        };

		        this.setTab = function(setTab) {
		          this.tab = setTab;
		        };
		    },
		    controllerAs: 'tab'
    	};
  	});

  	app.directive('productDescription', function() {
    	return {
      		restrict: 'E',
      		templateUrl: 'product-description.html'
    	};
  	});

  	app.directive("productSpecs", function() {
    	return {
      		restrict: 'A',
      		templateUrl: "product-specs.html"
    	};
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
			images: [ ],
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars: 5,
					body: "This is pretty cool!",
					author:  "joe@blogg.com"
				},
				{
					stars: 1,
					body: "Not feelin it",
					author:  "nick@hater.net"
				}
			]
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
			reviews: [
				{
					stars: 4,
					body: "Not sure about the price",
					author:  "abby@retail.com"
				},
				{
					stars: 2,
					body: "Questionable",
					author:  "luke@sky.net"
				}
			]

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
			reviews: [ ]
		}
	];

})();