describe("To test the LogToConsole logs expected msg's", function () {
	var logger;
  var file;
	beforeEach(function () {
    file = {
      writeDebug: function(log){return log;},
      writeError: function(log){return log;}
    };
    logger = new LogToFile(file);
	});

	afterEach(function () {

	});

  //debug
  it("should call file.writeDebug(log) when debug called", function(){
    spyOn(file, "writeDebug");
    logger.debug("debug");
    expect(file.writeDebug).toHaveBeenCalled();
  });

	it("logger.debug should set last log message", function() {
    logger.debug("debug");
    expect(logger.getLastLog()).toBe("debug");
	});

  //error
  it("should call file.writeError(log) when error called", function(){
    spyOn(file, "writeError");
    logger.error("error");
    expect(file.writeError).toHaveBeenCalled();
  });

	it("logger.error should set last log message", function(){
    logger.error("error");
    expect(logger.getLastLog()).toBe("error");
	});

});
