/*
* We're able to lift the exact same tests in Html5Player and reuse them, only adding
* to the beforeEach function a little setup. As they use the same interface,
* we can use the same tests.
*/

describe("To test the player controller can play and stop content", function () {
	var player;
  var html5Player;

	beforeEach(function () {
    html5Player = new Html5Player("test");
		player = new PlayerController(html5Player);
	});

	afterEach(function () {

	});

	it("should play content when a url is passed to player.play", function() {
	 	player.play("url");
	 	expect(player.isPlaying()).toBe(true);
	});

	it("should stop content when player.stop is called", function(){
	 player.stop();
	 expect(player.isPlaying()).toBe(false);
	});

});
