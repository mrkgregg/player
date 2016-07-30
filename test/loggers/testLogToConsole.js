describe("To test the LogToConsole", function () {
	var logger;
  var console;
	beforeEach(function () {
    console = {
      log: function(log){},
      error: function(log){}
    };
    logger = new LogToConsole(console);
	});

	afterEach(function () {

	});

  describe("LogToConsole.debug()", function() {

    it("should call console.log()", function(){
      spyOn(console, "log");
      logger.debug("debug");
      expect(console.log).toHaveBeenCalled();
    });

    // reuse test exactly from LogToFile
  	it("should set last log message", function() {
      logger.debug("debug");
      expect(logger.getLastLog()).toBe("debug");
  	});

  });

  describe("LogToConsole.error()", function() {

    it("should call console.error()", function(){
      spyOn(console, "error");
      logger.error("error");
      expect(console.error).toHaveBeenCalled();
    });

    // reuse test exactly from LogToFile
  	it("should set last log message", function(){
      logger.error("error");
      expect(logger.getLastLog()).toBe("error");
  	});

  });

});
