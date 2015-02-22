/* gulpfile.js */

// Load some modules which are installed through NPM.

var browserSync   = require('browser-sync');
var gulp          = require('gulp');
var browserify    = require('browserify');  // Bundles JS.
var del           = require('del');  // Deletes files.
var reactify      = require('reactify');
var source        = require('vinyl-source-stream');
var handleErrors  = require('./gulp/util/handleErrors');

// Define some paths.
var paths = {
  app_js: ['./src/js/app.js'],
  static: ['./src/!(js)/*', './src/*.*'],
  js: ['./src/js/**/*.js'],
  dest: './build/'
};




gulp.task('clean', function(done) {
  del(['build/*'], done);
});
// Our JS task. It will Browserify our code and compile React JSX files.
gulp.task('build', ['clean'], function() {
  // copy static files
  gulp.src(paths.static, {base: './src/'})
    .pipe(gulp.dest(paths.dest));

  // Browserify/bundle the JS.
  browserify(paths.app_js)
    .transform(['reactify', {es6: true}])
    .bundle()
    .on('error', handleErrors)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(browserSync.reload({stream:true}));
});


// BrowserSync
gulp.task('browserSync', function() {
  browserSync({
    open: false,
    server: {
      // Serve up our build folder
      baseDir: paths.dest
    }
  });
});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['build', 'browserSync'], function() {
  gulp.watch(['src/js/**/*.js', 'src/*.*', 'src/!(js)/*'], ['build']);
});
