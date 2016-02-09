/**
 * GAME ENGINE: FredSvg
 */
import FredSvg from "./components/fredSvg.js";

/* global PIXI, Matter */

/**
 * DISCLAIMER: THIS CODE IS NOT FINAL
 * IN FACT, IT IS DOWNRIGHT UGLY
 * THIS IS THE WAY IT SHOULD BE FOR NOW
 * UGLY CODE 4EVA.. WELL. NOT 4EVA.
 */

const Engine = Matter.Engine;
const	World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Composites = Matter.Composites;
const Svg = Matter.Svg;
const Vertices = Matter.Vertices;
const Vector = Matter.Vector;
const Common = Matter.Common;
const Bounds = Matter.Bounds;
const Events = Matter.Events;

export default class TestGame {
	/* eslint-disable new-cap */
	constructor() {
		this.width = 2560;
		this.height = 1440;

		//this.renderer = new PIXI.autoDetectRenderer(800, 600);
		//document.body.appendChild(this.renderer.view);
		this.loader = PIXI.loader;
		this.setupRequestAnimFrame();
		this.setupPhysics();
	}

	start() {
		this.loadAssets((loader, resources) => {
			this.startGame(resources);
		});
	}

	loadAssets(callback) {
		this.loader.add("level", "assets/svg/test.svg");
		this.loader.load(callback);
	}

	setupPhysics() {
		/* eslint-disable new-cap */
		const container = document.body;
		this.engine = Engine.create(container, {
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
		// this.engine.world.gravity.y = 1.25;

	}

	startGame(resources) {

		//console.log(this.engine.renderer);

		const centerX = this.width / 2;
		const centerY = this.height / 2;
		const bottomY = this.height;
		const bodies = [];
		const size =  10;

		const columns = 1;
		const rows = 10;
		const spacing = size;

		const level = resources.level;
		const layers = level.data.querySelectorAll("switch > g > g");

		Array.prototype.forEach.call(layers, (layer) => {

			if (layer.id === "Player") {
				return;
			}

			const isStatic = (layer.id === "Static");

			const paths = layer.querySelectorAll("path");
			const circles = layer.querySelectorAll("circle");
			const rectangles = layer.querySelectorAll("rect");
			const polygons = layer.querySelectorAll("polygon");

			/**
			 * CIRCLES
			 */
			Array.prototype.forEach.call(circles, (circle) => {
				const x = circle.cx.baseVal.value;
				const y = circle.cy.baseVal.value;
				const radius = circle.r.baseVal.value;

				//console.log({x: x, y: y, r: radius});

				const body = Bodies.circle(x, y, radius, {
					restitution: 0.5,
					render: {
						fillStyle: "#CCC",
						strokeStyle: "transparent"
					}
				});
				Body.setStatic(body, isStatic);
				World.add(this.engine.world, body);
			});

			/**
			 * PATHS
			 */

			Array.prototype.forEach.call(paths, (path) => {
				let vertexSets = [];
				var vertices = Svg.pathToVertices(path, 30);
				vertices = Vertices.scale(vertices, 1.0, 1.0);

				const bodyCenterX = Vertices.centre(vertices).x;
				const bodyCenterY = Vertices.centre(vertices).y;

				vertexSets.push(vertices);

				const body = Bodies.fromVertices(bodyCenterX, bodyCenterY, vertexSets, {
					restitution: 0.5,
					render: {
						fillStyle: "#CCC",
						strokeStyle: "transparent"
					}
				}, true);

				Body.setStatic(body, isStatic);
				World.add(this.engine.world, body);
			});

			/**
			 * RECTANGLES
			 */
			Array.prototype.forEach.call(rectangles, (rectangle) => {
				const x = rectangle.x.baseVal.value;
				const y = rectangle.y.baseVal.value;
				const width = rectangle.width.baseVal.value;
				const height = rectangle.height.baseVal.value;
				const centerX = x + (width / 2);
				const centerY = y + (height / 2);
				const body = Bodies.rectangle(centerX, centerY, width, height, {
					restitution: 0.5,
					render: {
						fillStyle: "#CCC",
						strokeStyle: "transparent"
					}
				});

				/**
				 * MATRIX
				 */
				if (rectangle.transform.baseVal.length > 0) {
					// Array.prototype.forEach.call(rectangle.transform.baseVal, (transform) => {
					// 	//console.log(Vertices.translate(body.vertices, transform.matrix, 1.0));
					// 	//Body.setVertices(body, );
					// });
					// console.log("REKT:", rectangle.transform.baseVal)
				}

				Body.setStatic(body, isStatic);
				World.add(this.engine.world, body);
			});

			/**
			 * POLYGONS
			 */

			Array.prototype.forEach.call(polygons, (polygon) => {
				var vertices = polygon.points;
				vertices = Array.prototype.map.call(vertices, (point) => {
					return point;
				});

				vertices = Vertices.scale(vertices, 1.0, 1.0);

				const bodyCenterX = Vertices.centre(vertices).x;
				const bodyCenterY = Vertices.centre(vertices).y;

				const body = Bodies.fromVertices(bodyCenterX, bodyCenterY, [vertices], {
					restitution: 0.5,
					render: {
						fillStyle: "#CCC",
						strokeStyle: "transparent"
					}
				}, true);

				Body.setStatic(body, isStatic);
				World.add(this.engine.world, body);
			});
		});

		Events.on(this.engine, "beforeUpdate", event => {
			this.engine.render.bounds.min.x = 100;
			this.engine.render.bounds.min.y = 1000;

			this.engine.render.bounds.max.x = 1000;
			this.engine.render.bounds.max.y = 1440;
		});

		Engine.run(this.engine);
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
