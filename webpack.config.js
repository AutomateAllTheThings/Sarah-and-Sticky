var path = require("path");

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: [
        "./source/lib/entry.js"
    ],
    output: {
        path: path.join(__dirname, "build"),
        publicPath: "/",
        filename: "game.js"
    },
    module: {
        loaders: [
						{
							test: /\.json$/,
							loader: "json-loader"
						},
						{
							test: /\.js$/,
							loader: "transform?brfs"
						},
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
};
