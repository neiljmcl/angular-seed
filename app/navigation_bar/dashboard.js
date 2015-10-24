'use strict';

angular.module('myApp.dashboard', [])
    .directive('navigationBar', function() {
      return {
        restrict: 'E',
        templateUrl: 'navigation_bar/navigation_bar.html',
        scope: {}
      };
    })
    .directive('dashboard', function() {
      return {restrict: 'E',
        templateUrl: 'navigation_bar/dashboard.html',
        scope: {}
      };

    })
    .directive('dashboardBody', function() {
      return {
        restrict: 'E',
        controller: ['DataService', '$scope',function(dataService, $scope) {
          console.log(dataService.loremIpsum());
          dataService.loremIpsum().then(function(loremIpsum) {
            $scope.items = loremIpsum;
          });

        }],
        templateUrl: 'navigation_bar/dashboard_body.html',
        scope: {}
      };
    })
    .directive('dashboardHead', function() {
      return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'navigation_bar/dashboard_head.html',
        scope: {}
      };
    })
    .directive('dashboardMenu', function() {
      return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'navigation_bar/dashboard_menu.html',
        scope: {}
      };
    })
    .factory('DataService', ['$q', function($q) {
      var data = function(p,a,b,c,d) {
        return {
          "hash": p,
          "header1": a,
          "header2": b,
          "header3": c,
          "header4": d,
        }
      };
      return {
        loremIpsum: function() {
          var deferred = $q.defer();
          deferred.resolve([
            data("1,001", "Lorem", "Ipsum", "dolor", "sit"),
            data("1,002", "amet", "consectetur", "adipiscing", "elit"),
            data("1,003", "Integer", "nec", "odio", "Praesent"),
            data("1,003", "libero", "Sed", "cursus", "ante"),
            data("1,004", "dapibus", "diam", "Sed", "nisi"),
            data("1,005", "Nulla", "quis", "sem", "at"),
            data("1,006", "nibh", "elementum", "imperdiet", "Duis"),
            data("1,007", "sagittis", "ipsum", "Praesent", "mauris")
          ]);
          return deferred.promise;
        }
      };
    }]);

