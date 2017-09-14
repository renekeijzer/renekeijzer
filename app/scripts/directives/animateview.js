'use strict';

/**
 * @ngdoc directive
 * @name renekeijzerApp.directive:animateView
 * @description
 * # animateView
 */
angular.module('renekeijzerApp')
  .directive('animateView', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        console.log(scope);

      }
    };
  });
