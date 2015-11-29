(function(){
    var nextIdNum = 0;

    function PartyService(){
        var factory =  {
            createPartyMember: createPartyMember
        };
        return factory;
        
        function createPartyMember(){
            
            var newPartyMember = {
                id: nextIdNum,
                name: "Party " + (nextIdNum + 1)
            };
            
            nextIdNum++;
            return newPartyMember;
        }
        
    }
    
    angular
        .module("myApp.partyService", [])
        .factory("PartyService", PartyService);
})();
