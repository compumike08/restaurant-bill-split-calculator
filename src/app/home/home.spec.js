'use strict';

describe('myApp.home module', function() {

  beforeEach(module('ui.router'));
  beforeEach(module('myApp.home'));

  describe('home controller', function(){
    var homeCtrl, scope;
      
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        homeCtrl = $controller('HomeCtrl', {$scope: scope});
    }));

    it('should ....', inject(function(){
        expect(homeCtrl).toBeDefined();
    }));

  });
});