/*
* This takes any player and any logger to create a player that logs on the play function.
*/
var _player;
var _logger;
var PlayerLogger = function(player, logger){
    _player = player;
    _logger = logger;
    MIXIN(player, this); // adds player param's properties to PlayerLogger (that aren't defined for PlayerLogger).
};

PlayerLogger.prototype.play = function(url){
  _logger.debug("Playing. Url = " + url);
  _player.play(url); // use the injected base class play function after our logging added to this function
};

// isPlaying() and stop() functions are taken from player injected in, via MIXIN
