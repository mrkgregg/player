/*
* This takes any player and any logger to create a player that logs on the play function.
*/
var _player;
var _logger;
var PlayerLogger = function(player, logger){ // injecting the dependency
    _player = player;
    _logger = logger;
    MIXIN(player, this); // adds player param's properties to PlayerLogger (that aren't defined for PlayerLogger).
};

PlayerLogger.prototype.play = function(url){
  _logger.debug("Playing. Url = " + url);
  _player.play(url); // use the injected base class play function after our logging added to this function
};

// isPlaying() and stop() functions are taken from player injected in, via MIXIN




/****** EXAMPLE ******
*This shows examples of how to create players with the functionality required
* via composition.
* There is another example of this in the test for this class, hence this hasn't been tested
* but is just here to show how it works more clearly.
*/

//Example 1: EnchancedPlayer with File Logger
var enhancedPlayer = new EnhancedPlayer("EnhancedPlayer");
var fileLogger = new LogToFile("path/to/file.txt");

var enhancedFileLoggerPlayer = new PlayerLogger(enhancedPlayer, fileLogger);

enhancedFileLoggerPlayer.play("Mark's URL"); // calls Play method defined in PlayerLogger and therefore logs "Mark's URL to file"
enhancedFileLoggerPlayer.stop(); // calls the stop method defined in EnhancedPlayer

//Example 2: StandardPlayer with ConsoleLogger
var standardPlayer = new StandardPlayer("StandardPlayer");
var consoleLogger = new LogToConsole("ConsoleType");

var standardConsoleLoggerPlayer = new PlayerLogger(standardPlayer, consoleLogger);

standardConsoleLoggerPlayer.play("Mark's Second URL"); // logs Url to cosole
standardConsoleLoggerPlayer.stop(); // calls stop method defined in EnhancedPlayer
