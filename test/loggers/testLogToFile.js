describe("To test the LogToConsole", function () {
	var logger;
  var file;
	beforeEach(function () {
    file = {
      writeDebug: function(log){return log;},
      writeError: function(log){return log;}
    };
    logger = new LogToFile(file);
	});

  describe("LogToConsole.debug()", function() {

    it("should call file.writeDebug(log)", function(){
      spyOn(file, "writeDebug");
      logger.debug("debug");
      expect(file.writeDebug).toHaveBeenCalled();
    });

  	it("should set last log message", function() {
      logger.debug("debug");
      expect(logger.getLastLog()).toBe("debug");
  	});

  });

  describe("LogToConsole.error()", function() {

    it("should call file.writeError(log)", function(){
      spyOn(file, "writeError");
      logger.error("error");
      expect(file.writeError).toHaveBeenCalled();
    });

  	it("should set last log message", function(){
      logger.error("error");
      expect(logger.getLastLog()).toBe("error");
  	});

  });

});
