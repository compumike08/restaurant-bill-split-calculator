'use strict';

describe('myApp.home module', function() {

  beforeEach(module('ui.router'));
  beforeEach(module('myApp.home'));

  describe('home controller', function(){
    var homeCtrl;
      
    beforeEach(inject(function($controller){
        homeCtrl = $controller('HomeCtrl');
    }));

    it('should be defined', inject(function(){
        expect(homeCtrl).toBeDefined();
    }));

  });
});
