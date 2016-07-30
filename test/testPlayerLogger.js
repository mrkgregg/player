describe("To Test PlayerLogger", function () {
  var console;
  var logger;
  var html5Player;
  var player;

	beforeEach(function () {
    console = {
      log: function(log){},
      error: function(log){}
    };
    logger = new LogToConsole();
    html5Player = new Html5Player("test");
    player = new PlayerLogger(html5Player, logger);
	});

	afterEach(function () {

	});

	it("should call logger.debug when playing a url", function() {
      spyOn(logger, "debug");
      player.play("testUrl");
      expect(logger.debug).toHaveBeenCalled();
	});

});
