(function(){

'use strict';

    function config($stateProvider){
        $stateProvider
            .state('view2', {
                url: '/view2',
                templateUrl: 'view2/view2.html',
                controllerAs: "View2Vm",
                controller: 'View2Ctrl'
            });
    }

    function View2Ctrl($scope){
        var view2Vm = this;
    }

    angular.module('myApp.view2', ['ui.router'])
        .config(config)
        .controller('View2Ctrl',View2Ctrl);

})();
