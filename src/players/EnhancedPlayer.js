var _isPlaying;
var propToSet; // simplified differentation between Standard / EnhancedPlayer
var EnhancedPlayer = function(prop){
  propToSet = prop;
};

EnhancedPlayer.prototype = Object.create(Player); // prototype = the interface

// override the interface in the prototype
EnhancedPlayer.prototype.play = function(url){
  _isPlaying = true;
};

EnhancedPlayer.prototype.isPlaying = function(){
  return _isPlaying;
};

EnhancedPlayer.prototype.setIsPlaying = function(isPlaying){
  _isPlaying = isPlaying;
};

EnhancedPlayer.prototype.stop = function(){
  _isPlaying = false;
};
