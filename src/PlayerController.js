/*
* By programming to the interface (Player), we can create a really generic
* controller that uses the same interface, but takes the dependency
*(different implementation of players) injected in to peform the functionality.
*/

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
