var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('scripts', function() {
  browserify('./browser.js')
    .bundle()
    .pipe(source('js.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['scripts']);
