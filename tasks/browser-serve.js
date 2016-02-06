import gulp from "gulp";
const browserSync = require("browser-sync").create();
import paths from "../paths.json";
import webpack from "webpack-stream";

gulp.task("browser-update", ["build-browser"], () => {
	browserSync.reload();
});

// Static server
gulp.task("browser-serve", () => {
    browserSync.init({
        server: {
            baseDir: paths.build.base,
						directory: true
        }
    });

		gulp.watch([paths.source.base, paths.source.assets], ["browser-update"]);
});

gulp.task("build-browser", ["build-index", "build-assets"], () => {
	return gulp.src(paths.source.lib)
    .pipe(webpack(require("../webpack.config.js")))
    .pipe(gulp.dest(paths.build.base));
});

gulp.task("build-index", () => {
	return gulp.src(paths.source.index)
    .pipe(gulp.dest(paths.build.base));
});
