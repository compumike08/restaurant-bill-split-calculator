describe('myApp', function () {
    var $urlRouterProvider;
    
    beforeEach(module('ui.router'));
    
    beforeEach(function () {
        module(function(_$urlRouterProvider_) {
            $urlRouterProvider = _$urlRouterProvider_;
            spyOn($urlRouterProvider, 'otherwise');
        });
        module('myApp');
        inject();
    });
    
    it('should set $urlRouterProvider.otherwise to true', function() {
        expect($urlRouterProvider.otherwise)
            .toHaveBeenCalledWith(true);
    });
});
