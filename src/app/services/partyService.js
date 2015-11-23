(function(){
    var nextNum = 1;

    function PartyService(){
        var factory =  {
            createPartyMember: createPartyMember
        };
        return factory;
        
        function createPartyMember(){
            
            var newPartyMember = {
                name: "Party " + nextNum
            };
            
            nextNum++;
            return newPartyMember;
        }
        
    }
    
    angular
        .module("myApp.partyService", [])
        .factory("PartyService", PartyService);
})();
