import gulp from "gulp";
import { Server } from "karma";

/**
 * Run test once and exit
 */
gulp.task("test-browsers", done => {
  new Server({
    configFile: `${__dirname}/../karma.conf.js`,
    singleRun: true
  }, done).start();
});
