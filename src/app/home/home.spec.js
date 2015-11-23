'use strict';

describe('myApp.home module', function() {

  beforeEach(module('ui.router'));
  beforeEach(module('myApp.home'));
  beforeEach(module('myApp.partyService'));

  describe('home controller', function(){
    var homeCtrl, partyServiceSpy;
    
    partyServiceSpy = {
        createPartyMember: {
            name: "Party 1"
        }
    };
    
    beforeEach(module(function($provide) {
       $provide.value("PartyService", partyServiceSpy);
    }));
      
    beforeEach(inject(function($controller){
        homeCtrl = $controller('HomeCtrl');
    }));

    it('should be defined', inject(function(){
        expect(homeCtrl).toBeDefined();
    }));

  });
});
