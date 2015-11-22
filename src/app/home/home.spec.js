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
    
    describe('sizeOfPartyForm', function(){
        it('should process the sizeOfPartyForm submit', inject(function(){
            homeCtrl.sizeOfParty = 5;
            homeCtrl.submit();
            expect(homeCtrl.getPartySize()).toEqual(5);
        }));
    });

  });
});