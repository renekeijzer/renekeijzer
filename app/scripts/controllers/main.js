'use strict';

/**
 * @ngdoc function
 * @name renekeijzerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the renekeijzerApp
 */
angular.module('renekeijzerApp')
  .controller('MainCtrl', function ($scope) {
    $(window).scroll(function () {
      if( $(window).scrollTop() > $('#head-main').offset().top && !($('#head-main').hasClass('head-sticky'))){
        $('#head-main').addClass('head-sticky');
        $('#head-main').removeClass('has-img');
        $('#head-main').css("min-height", "60px");
      } else if ($(window).scrollTop() == 0){
        $('#head-main').removeClass('head-sticky');
        $('#head-main').addClass('has-img');
        $('#head-main').css("min-height", "0px");
      }
    });
  });
