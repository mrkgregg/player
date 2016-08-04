describe("To Test PlayerLogger", function () {
  var console;
  var logger;
  var enhancedPlayer;
  var player;
  var pausingPlayer;
  var pausingFileLoggingPlayer;

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

  describe("test PlayerLogger with PausingPlayer", function(){
    it("should manipulated isPlaying to true when playing and false when paused", function(){
      pausingPlayer = new PausingPlayer(enhancedPlayer);
      pausingFileLoggingPlayer = new PlayerLogger(pausingPlayer, fileLogger);
      pausingFileLoggingPlayer.play("Mark's Third URL"); // logs to fileLogger
      expect(pausingFileLoggingPlayer.isPlaying()).toBe(true);
      pausingFileLoggingPlayer.pause();
      expect(pausingFileLoggingPlayer.isPlaying()).toBe(false);
    });

  });

});
