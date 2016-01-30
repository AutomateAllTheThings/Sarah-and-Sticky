import gulp from "gulp";
import { Server } from "karma";

/**
 * Run test once and exit
 */
gulp.task("test-browsers-watch", done => {
  new Server({
    configFile: `${__dirname}/../karma.conf.js`,
		autoWatch: true,
    singleRun: false
  }, done).start();
});
