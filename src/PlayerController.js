var player;
var PlayerController = function(p){
  player = p; // injecting the dependency
};

PlayerController.prototype = Object.create(Player); // interface is the prototype

PlayerController.prototype.play = function(url){
  player.play(url);
};

PlayerController.prototype.isPlaying = function(){
  return player.isPlaying();
};

PlayerController.prototype.stop = function(){
   player.stop();
};
