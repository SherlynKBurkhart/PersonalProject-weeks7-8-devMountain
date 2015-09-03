var app = angular.module('kasDesign', ['ngRoute', 'bootstrapLightbox', 'ui.bootstrap' 
  ]);

app.config(function($routeProvider) {
  $routeProvider

  .when('/home', {
    templateUrl: '/home.html',
  }) 

  .when('/earrings', {
    templateUrl: '/earrings.html',
    controller: 'earringsController'
  })

  .when('/rings', {
    templateUrl: '/rings.html',
    controller: 'ringsController'
  })

  .when('/pendants', {
    templateUrl: '/pendants.html',
    controller: 'pendantsController'
  })

  .when('/about', {
    templateUrl: '/aboutUs.html',
  })

  .when('/contact', {
    templateUrl: '/contactUs.html',
  })

  .when('/skbResume', {
    templateUrl: '/skbResume.html',
  })

  .when('/contactForm', {
    templateUrl: '/contactForm.html',
  })
  
  .otherwise({
    redirectTo: '/home'
  })

});

