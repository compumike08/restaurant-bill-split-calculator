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

    function HomeCtrl($scope){
        var homeVm = this;
    }

    angular.module('myApp.home', ['ui.router'])
        .config(config)
        .controller('HomeCtrl',HomeCtrl);

})();
