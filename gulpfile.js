var gulp = require('gulp','gulp-sass');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


//browser sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

// for sass to css
gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('run',['browserSync', 'sass'], function(){
    //gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 
  gulp.watch('app/styles/**/*.css', browserSync.reload); 
  gulp.watch('app/**/*.html', browserSync.reload); 
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/**/*.js', browserSync.reload);
  // Other watchers
});