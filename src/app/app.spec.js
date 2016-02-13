describe('myApp', function () {
    var $urlRouterProvider;
    
    beforeEach(module('ui.router'));
    
    beforeEach(module('myApp.partyService'));
    var PartyService;

    beforeEach(inject(function(_PartyService_){
        PartyService = _PartyService_;
    }));
    
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
            .toHaveBeenCalledWith("/home");
    });
});
