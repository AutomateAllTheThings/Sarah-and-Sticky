import gulp from "gulp";
import paths from "../paths.json";

gulp.task("build-index", () => {
	return gulp.src(paths.source.index)
    .pipe(gulp.dest(paths.build));
});
