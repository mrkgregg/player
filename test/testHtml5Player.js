describe("To test the HTML5 player can play and stop content", function () {
	var player;
	beforeEach(function () {
		player = new Html5Player("test");
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
