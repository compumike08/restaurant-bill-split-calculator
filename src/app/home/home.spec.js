'use strict';

describe('myApp.home module', function() {
    
    var homeCtrl;

  beforeEach(module('myApp.home'));

  describe('home controller', function(){
      
    beforeEach(inject(function($controller){
        homeCtrl = $controller('HomeCtrl');
    }));

    it('should ....', function(){
      //spec body
      expect(homeCtrl).toBeDefined();
    });

  });
});