import TestGame from "../lib/testGame.js";

describe("TestGame()", () => {
	let game;

	beforeEach(() => {
		game = new TestGame();
	});

	it("should have a player property", () => {
		game.should.have.property("player");
	});
});
