var _player;
var PausingPlayer = function(player){
  _player = player;
  MIXIN(player, this);
};

PausingPlayer.prototype.pause = function () {
  _player.setIsPlaying(false);
};
