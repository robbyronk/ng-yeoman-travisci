'use strict';

angular.module('ngYeomanTravisciApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/gnuRoute', {
        templateUrl: 'views/gnuRoute.html',
        controller: 'GnuRouteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
