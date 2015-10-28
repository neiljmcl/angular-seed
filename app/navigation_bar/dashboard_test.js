/**
 * Created by krantor on 28/10/2015.
 */


describe("Some general tests", function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 1500;
  var $compile, $rootScope;
  beforeEach(module('myApp.dashboard'));
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  it('arse', function(_$compile_, _$rootScope_) {
    var element = $compile("<arse></arse>")($rootScope);
    $rootScope.$digest();
    expect(element.html()).toBe("<div>asre</div>");
  });
});