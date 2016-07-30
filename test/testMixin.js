describe("To test Mixin", function () {
  var baseClass;
  var subClass;

	beforeEach(function () {
    baseClass = {
      shouldBeAdded : function(){return "Should be added";},
      shouldBeOverride :  function(){return "Should be overriden";}
    };

    subClass = {
      shouldBeOverride:  function(){return "This has been overriden";}
    };
	});

	it("should add properties of baseClass to subClass that aren't already defined in subClass", function() {
			MIXIN(baseClass, subClass);
      expect(subClass.shouldBeAdded).toBeDefined();
	});

  it("should override properties defined in both classes, using the subclass version", function() {
      MIXIN(baseClass, subClass);
      expect(subClass.shouldBeOverride()).toEqual("This has been overriden");
  });


});
