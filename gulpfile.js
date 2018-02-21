var gulp        = require('gulp'),
    svgo        = require('gulp-svgo'),
    svgSymbols  = require('gulp-svg-symbols');

gulp.task('svg:combined', function () {
  return gulp.src('./src/**/*.svg')
    .pipe(svgo())
    .pipe(svgSymbols({
      title:      false,
      templates: [
        'default-svg' // generates the SVG sprite
      ]
    }))
    .pipe(gulp.dest('./dist/svg'));
});
