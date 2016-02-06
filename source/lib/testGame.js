import "pixi.js";
import "pixi-spine";
import "pixi-tiny";
import "matter-js";

/* global PIXI */

export default class TestGame {
	constructor() {
		this.setup();
		this.runGame();
	}

	runGame() {
		var renderer = PIXI.autoDetectRenderer(2560, 1440);
		window.document.body.appendChild(renderer.view);

		// create the root of the scene graph
		var stage = new PIXI.Container();

		// load spine data
		PIXI.loader
			.add("sarah", "../../assets/Sarah/skeleton/skeleton.json")
			.load(onAssetsLoaded);

		var sarah = null;

		function onAssetsLoaded(loader, res) {
			// instantiate the spine animation
			sarah = new PIXI.spine.Spine(res.sarah.spineData);
			sarah.skeleton.setToSetupPose();
			sarah.update(0);
			sarah.autoUpdate = false;

			// create a container for the spine animation and add the animation to it
			var sarahCage = new PIXI.Container();
			sarahCage.addChild(sarah);

			// measure the spine animation and position it inside its container to align it to the origin
			var localRect = sarah.getLocalBounds();
			sarah.position.set(-localRect.x, -localRect.y);

			// now we can scale, position and rotate the container as any other display object
			var scale = Math.min((renderer.width * 0.7) / sarahCage.width, (renderer.height * 0.7) / sarahCage.height);
			sarahCage.scale.set(scale, scale);
			sarahCage.position.set((renderer.width - sarahCage.width) * 0.5, (renderer.height - sarahCage.height) * 0.5);

			// add the container to the stage
			stage.addChild(sarahCage);

			// once position and scaled, set the animation to play
			sarah.state.setAnimationByName(0, "Idle", true);

			animate();
		}

		function animate() {
			requestAnimationFrame(animate);

			// update the spine animation, only needed if sarah.autoupdate is set to false
			sarah.update(0.01666666666667); // HARDCODED FRAMERATE!
			renderer.render(stage);
		}

	}

	setup() {
		this.setupRequestAnimFrame();
	}

	setupRequestAnimFrame() {
		window.requestAnimFrame = (...options) => {
			const installedRequestAnimFrame =
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame	||
				function (callback) {
					window.setTimeout(callback, 1000 / 60);
				};

			return installedRequestAnimFrame(...options);
		};
	}
}
