(function(){

'use strict';

    function config($stateProvider){
        $stateProvider
            .state('view1', {
                url: '/view1',
                templateUrl: 'view1/view1.html',
                controllerAs: "View1Vm",
                controller: 'View1Ctrl'
            });
    }

    function View1Ctrl($scope){
        var view1Vm = this;
    }

    angular.module('myApp.view1', ['ui.router'])
        .config(config)
        .controller('View1Ctrl',View1Ctrl);

})();
