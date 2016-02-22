(function(){

'use strict';

    function config($stateProvider){
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/home.html',
                controllerAs: "HomeVm",
                controller: 'HomeCtrl'
            });
    }

    function HomeCtrl(PartyService, PartyMemberService, $state){
        var homeVm = this;
        homeVm.parties = [];
        initParty();
        
        homeVm.addParty = function(){
            addNewParty();
        };
        
        homeVm.deleteParty = function(party){
            deleteThisParty(party);
        };
        
        homeVm.submit = function(){
            var partyNameList = "";
            var partyAryLength = homeVm.parties.length;
            
            for(var i = 0; i < partyAryLength; i++){
                PartyMemberService.addPartyMember(homeVm.parties[i]);
            }
            
            var tempAry = PartyMemberService.getPartyMembers();
            partyAryLength = PartyMemberService.getPartySize();
            
            for(var i = 0; i < partyAryLength; i++){
                partyNameList = partyNameList + "\n" + tempAry[i].id + ": " + tempAry[i].name;
            }
            
            $state.go('items');
        };
        
        function initParty(){
            addNewParty();
        }
        
        function addNewParty(){
            var tempNewPartyMember = PartyService.createPartyMember();
            homeVm.parties.push(tempNewPartyMember);
        }
        
        function deleteThisParty(party){
            var index = homeVm.parties.indexOf(party);
            homeVm.parties.splice(index, 1);
        }
        
    }

    angular.module('myApp.home', ['ui.router', 'myApp.partyService', 'myApp.partyMemberService'])
        .config(config)
        .controller('HomeCtrl',HomeCtrl);

})();
