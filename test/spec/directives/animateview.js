'use strict';

describe('Directive: animateView', function () {

  // load the directive's module
  beforeEach(module('renekeijzerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<animate-view></animate-view>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the animateView directive');
  }));
});
