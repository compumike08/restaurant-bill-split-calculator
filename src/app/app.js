(function(){

    'use strict';

    function appConfig ($urlRouterProvider) {
        $urlRouterProvider.otherwise("/view1");
    }
    
    function appRun($rootScope, $state) {
        $rootScope.$state = $state;
    }
    
    angular.module('myApp', ['ui.router', 'myApp.view1', 'myApp.view2', 'myApp.version'])
        .config(appConfig)
        .run(appRun);

})();
