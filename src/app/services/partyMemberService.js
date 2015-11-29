(function(){
    var partyMembersArray = [];

    function PartyMemberService(){
        var service =  {
            addPartyMember: addPartyMember,
            getPartyMembers: getPartyMembers,
            getPartySize: getPartySize
        };
        return service;
        
        function addPartyMember(in_name){
            var tempPartyMember = {
                name: in_name
            };
            
            partyMembersArray.push(tempPartyMember);
        }
        
        function getPartyMembers(){
            var tempPartyMembers = [];
            angular.copy(partyMembersArray, tempPartyMembers);
            return tempPartyMembers;
        }
        
        function getPartySize(){
            return partyMembersArray.length;
        }
        
    }
    
    angular
        .module("myApp.partyMemberService", [])
        .service("PartyMemberService", PartyMemberService);
})();
