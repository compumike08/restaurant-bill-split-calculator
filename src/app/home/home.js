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

    function HomeCtrl(){
        var homeVm = this;
        //TODO: Create service to hold the party size info instead of storing it in a variable inside HomeCtrl.
        var partySize;
        
        homeVm.submit = function(){
            //TODO: Create service to hold the party size info instead of storing it in a variable inside HomeCtrl.
            partySize = homeVm.sizeOfParty;
        };
        
        //TODO: Create service to hold the party size info instead of storing it in a variable inside HomeCtrl.
        homeVm.getPartySize = function(){
            return partySize;
        };
        
    }

    angular.module('myApp.home', ['ui.router'])
        .config(config)
        .controller('HomeCtrl',HomeCtrl);

})();
