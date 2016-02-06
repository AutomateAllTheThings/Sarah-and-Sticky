import gulp from "gulp";
import paths from "../paths.json";

gulp.task("build-assets", () => {
	return gulp.src(paths.source.assets)
    .pipe(gulp.dest(paths.build.assets));
});
