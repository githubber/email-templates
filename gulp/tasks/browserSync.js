var gulp = require('gulp');
    paths = require('../config').paths,
    browserSync = require('browser-sync');

// BrowserSync

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./dist",
            index: "base.html"
        },
        open: "external",
        logPrefix: "browserSync"
    });
});
