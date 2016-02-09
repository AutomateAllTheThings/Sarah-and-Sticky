import Matter from "matter-js";

export default class Physics {
	constructor(options) {
		const container = document.body;
		this.engine = Matter.Engine.create(container, {
			positionIterations: 6,
      velocityIterations: 4,
      enableSleeping: true,
      metrics: { extended: true },
			render: {
				// controller: Matter.RenderPixi,
				options: {
					width: this.width,
					height: this.height,
					background: "#EEE",
					wireframeBackground: "#222",
					hasBounds: true,
					enabled: true,
					wireframes: false,
					showSleeping: false,
					showDebug: false,
					showBroadphase: false,
					showBounds: false,
					showVelocity: false,
					showCollisions: false,
					showAxes: false,
					showPositions: false,
					showAngleIndicator: false,
					showIds: false,
					showShadows: false
				}
			}
		});
	}
}
