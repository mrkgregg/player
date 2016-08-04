var _player;
var PausingPlayer = function(player){
  _player = player;
  MIXIN(_player, this);
};

PausingPlayer.prototype.pause = function() {
  _player.setIsPlaying(false);
};
