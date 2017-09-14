'use strict';

/**
 * @ngdoc function
 * @name renekeijzerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the renekeijzerApp
 */
angular.module('renekeijzerApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    var $this = this;
    $scope.skillsVisible = false;
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

    $scope.animateSkills = function animateSkills() {
      $('#skillsD').removeClass('n-animate-up');
      $('#skillsD').addClass('animate-up');
    }

    $scope.animateExperience = function animateExperience() {
      $('#experienceD').removeClass('n-animate-up');
      $('#experienceD').addClass('animate-up');
      $('.timeline-inner > .timeline-box').each(function(){
        $this.handleElement(this, 250);

      });
    }
    $this.handleElement = function handleElement(element, time){
      $timeout(function(){
      var box = $(element).children()[1];
      if($(box).hasClass('n-animate-left')){
        $(box).removeClass('n-animate-left');
        $(box).addClass('animate-left');
      }else if ($(box).hasClass('n-animate-right')) {
        $(box).removeClass('n-animate-right');
        $(box).addClass('animate-right');
      }
    }, time);
    }


    $scope.animateBlog = function animateBlog() {
      $('#blogD').removeClass('n-animate-up');
      $('#blogD').addClass('animate-up');
    }
  });
