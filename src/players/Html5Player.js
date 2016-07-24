var _isPlaying;
var propToSet;
var Html5Player = function(prop){
  propToSet = prop;
};

Html5Player.prototype = BtPlayer;

Html5Player.prototype.play = function(url){
  _isPlaying = true;
};

Html5Player.prototype.isPlaying = function(){
  return _isPlaying;
};

Html5Player.prototype.stop = function(){
  _isPlaying = false;
};
