'use strict';

describe('myApp.partyService module', function() {

    beforeEach(module('myApp.partyService'));
    var PartyService;

    beforeEach(inject(function(_PartyService_){
        PartyService = _PartyService_;
    }));

    describe('createPartyMember function', function(){
        it('should create a new party member object with name property defined', function(){
            var newPartyMember = PartyService.createPartyMember();

            expect(newPartyMember.name).toBeDefined();
        });
    });
});
