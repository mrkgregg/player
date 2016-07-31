var _isPlaying;
var propToSet; // simplified differentation between Standard / EnhancedPlayer
var StandardPlayer = function(prop){
  propToSet = prop;
};

StandardPlayer.prototype = Object.create(Player); // prototype = the interface

// override the interface in the prototype
StandardPlayer.prototype.play = function(url){
  _isPlaying = true;
};

StandardPlayer.prototype.isPlaying = function(){
  return _isPlaying;
};

StandardPlayer.prototype.stop = function(){
  _isPlaying = false;
};
