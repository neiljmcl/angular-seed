'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$log', function($scope, $log ) {
        $log.info("Called the View1Ctrl");
  $scope.durian = "durian";
      $scope.aubergine="pea aubergine";
      $scope.apple = "apple"
      $scope.celeriac="celeriac";
}])

.directive('fruitandveg', [function() {
  return {
    restrict: 'E',
    scope: {
      fruit: '=', vegetable: '='
    },
    template: 'fruit: {{fruit}} vegetable: {{vegetable}}<BR>'
  };
}]);

