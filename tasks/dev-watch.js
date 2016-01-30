import gulp from "gulp";
import gutil from "gulp-util";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";

gulp.task("dev-watch", ["build-browser"], () => {
    // Start a webpack-dev-server
    const compiler = webpack(require("../webpack.config.js"));

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", (error) => {
        if (error) { throw new gutil.PluginError("webpack-dev-server", error); }
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/build/index.html");
    });
});
