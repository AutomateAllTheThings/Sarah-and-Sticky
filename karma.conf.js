module.exports = function (config) {
	config.set({
    basePath: "./",
    frameworks: ["mocha", "sinon-chai"],
		browsers: [
			"Chrome",
			"Firefox"
		],
		preprocessors: {
			"source/spec/**/*.js": ["webpack"]
		},
		files: [
			"source/spec/**/*.js"
		],
		webpack: {
			module: {
					loaders: [
							{
									test: /\.js$/,
									loader: "babel",
									exclude: /node_modules/,
									query: {
											cacheDirectory: true,
											presets: ["es2015"]
									}
							}
					]
			}
		}
  });
};
