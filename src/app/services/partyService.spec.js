'use strict';

describe('myApp.partyService module', function() {

  beforeEach(module('myApp.partyService'));

  describe('partyService service', function(){
    var createPartyMember;
      
    beforeEach(inject(function($injector){
        createPartyMember = $injector.get('createPartyMember');
    }));
    
    describe('createPartyMember function', function(){
        it('should create a new party member object with name property defined', function(){
            var newPartyMember = createPartyMember();
            
            expect(newPartyMember.name).toBeDefined();
        });
    });

  });
});
