describe("To Test PlayerLogger", function () {
  var console;
  var logger;
  var enhancedPlayer;
  var player;

	beforeEach(function () {
    console = {
      log: function(log){},
      error: function(log){}
    };
    logger = new LogToConsole();
    enhancedPlayer = new EnhancedPlayer("test");
    player = new PlayerLogger(enhancedPlayer, logger);
	});

	it("should call logger.debug when playing a url", function() {
      spyOn(logger, "debug");
      player.play("testUrl");
      expect(logger.debug).toHaveBeenCalled();
	});

  it("should be able to call player.isPlaying()", function() {
      expect(player.isPlaying).toBeDefined();
	});

  it("should be able to call player.stop()", function() {
      expect(player.stop).toBeDefined();
  });

});
