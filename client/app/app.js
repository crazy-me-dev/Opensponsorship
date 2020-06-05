'use strict';

// Declare app level module which depends on views, and core components
angular.module('athleteProfile', [
  'ngRoute',
  'athleteProfile.athletes'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/athletes'});
}]);
