var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('static/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('static/scss/**/*.scss',['styles']);
});