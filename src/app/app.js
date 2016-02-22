(function(){

    'use strict';

    function appConfig ($urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
    }
    
    function appRun($rootScope, $state) {
        $rootScope.$state = $state;
    }
    
    angular.module('myApp', ['ui.router', 'myApp.home', 'myApp.items', 'myApp.version'])
        .config(appConfig)
        .run(appRun);

})();
