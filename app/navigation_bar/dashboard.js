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
        transclude: true,
        controller: ['DataService', '$scope', '$element', '$transclude',
          function(dataService, $scope, $element, $transclude) {
            $element.find("tr").append($transclude($scope));
          dataService.feeds().then(function(feeds) {
            // console.log($transclude());
            // $scope.feeds = feeds;
            $scope.feed = feeds[0];
          });
          this.addColumn = function(colName, property) {
            console.log("Adding column: ", colName);
          };

        }],
        templateUrl: 'navigation_bar/dashboard_body.html',
        scope: {}
      };
    })
    .directive('feedId', function() {
      return {
        require: "^dashboardBody",
        restrict: "E",
        transclude: false,
        link: function(scope, element, attrs, dashboardBody) {
          dashboardBody.addColumn("Feed id", "feedId");
        }
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
    }).factory('DataService', ['$q', function($q) {
      var data = function(p,a,b,c,d) {
        return {
          "feedId": p,
          "provider": a,
          "feedStatus": b,
          "header3": c,
          "header4": d,
        }
      };
      return {
        feeds: function() {
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
    }]).directive('arse', function() {
      return {
        restrict: 'E',
        template: '<div>arse</div>'
      };
    });

