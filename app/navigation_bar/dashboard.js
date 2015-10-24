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

;
