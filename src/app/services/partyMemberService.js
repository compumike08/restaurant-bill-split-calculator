(function(){
    var partyMembersArray = [];

    function PartyMemberService(){
        var service =  {
            addPartyMember: addPartyMember,
            getPartyMembers: getPartyMembers,
            getPartySize: getPartySize
        };
        return service;
        
        function addPartyMember(in_member){
            partyMembersArray.push(in_member);
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
