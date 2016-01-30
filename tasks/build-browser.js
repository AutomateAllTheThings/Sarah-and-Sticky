import gulp from "gulp";
import paths from "../paths.json";
import webpack from "webpack-stream";

gulp.task("build-browser", ["build-index"], () => {
	return gulp.src(paths.source.lib)
    .pipe(webpack(require("../webpack.config.js")))
    .pipe(gulp.dest(paths.build));
});
