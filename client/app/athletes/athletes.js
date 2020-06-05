'use strict';

angular.module('athleteProfile.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/athletes', {
    templateUrl: 'athletes/athletes.html',
    controller: 'View1Ctrl'
  });
}])

.controller('AthletesCtrl', [function() {

}]);