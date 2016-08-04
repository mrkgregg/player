describe("To test the Standard player can play and stop content", function () {
	var player;
	beforeEach(function () {
		player = new StandardPlayer("test");
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

});
