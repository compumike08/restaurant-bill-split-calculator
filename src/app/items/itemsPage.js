(function(){

'use strict';

    function config($stateProvider){
        $stateProvider
            .state('items', {
                url: '/items',
                templateUrl: 'items/itemsPage.html',
                controllerAs: "ItemsVm",
                controller: 'ItemsCtrl'
            });
    }
    
    function ItemsCtrl(PartyMemberService){
        var itemsVm = this;
        itemsVm.partyMembers = [];
        itemsVm.partyMembers = PartyMemberService.getPartyMembers();
        itemsVm.itemsList = [];
        
        itemsVm.newItem = {};
        itemsVm.newItem.itemName = "";
        itemsVm.newItem.itemPrice = "";
        itemsVm.newItem.itemOrderedBy = "";
        
        itemsVm.addItem = function(){
            var tempItem = {
                itemName: itemsVm.newItem.itemName,
                itemPrice: itemsVm.newItem.itemPrice,
                itemOrderedBy: itemsVm.newItem.itemOrderedBy
            };
            
            itemsVm.itemsList.push(tempItem);
            
            itemsVm.newItem = null;
        };
        
        itemsVm.deleteItem = function(item){
            window.alert("DELETE ITEM: " + item.itemName);
        };
    }
    
    angular.module('myApp.items', ['ui.router', 'myApp.partyMemberService'])
        .config(config)
        .controller('ItemsCtrl',ItemsCtrl);
    
})();
