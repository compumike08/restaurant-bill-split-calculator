describe('myApp', function () {
    var $urlRouterProvider;
    
    beforeEach(function () {
        angular.module(function(_$urlRouterProvider_) {
            $urlRouterProvider = _$urlRouterProvider_;
            spyOn($urlRouterProvider, 'otherwise');
        });
        angular.module('myApp');
        inject();
    });
    
    it('should set $urlRouterProvider.otherwise to true', function() {
        expect($urlRouterProvider.otherwise)
            .toHaveBeenCalledWith(true);
    });
});
