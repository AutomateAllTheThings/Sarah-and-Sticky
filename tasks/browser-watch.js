import gulp from "gulp";
const browserSync = require("browser-sync").create();

// Static server
gulp.task("browser-watch", () => {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
});
