describe("To test the PausingPlayer", function () {
  var standardPlayer;
  var player;
	beforeEach(function () {
    standardPlayer = new StandardPlayer("test");
		player = new PausingPlayer(standardPlayer);
	});

	it("should play content when a url is passed to player.play", function() {
			player.play("url");
			expect(player.isPlaying()).toBe(true);
	});

	it("should set isPlaying to value passed in", function(){
		player.setIsPlaying(true);
		expect(player.isPlaying()).toBe(true);
	});

	it("should stop content when player.stop is called", function(){
		player.stop();
		expect(player.isPlaying()).toBe(false);
	});

  //pause test
  it("should set isPlaying to false when pausing", function(){
    player.setIsPlaying(true); //explict setting of is playing to true
    player.pause();
    expect(player.isPlaying()).toBe(false);
  });

});
