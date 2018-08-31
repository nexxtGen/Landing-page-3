

var gulp = require('gulp');
var gulpSass = require('gulp-sass');

gulp.task('build', function(){
    return gulp.src('./dev-assets/style.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('./prod-assets'));
});
gulp.task('watch', function(){
    gulp.watch('./dev-assets/**/*.scss', ['build']);
});