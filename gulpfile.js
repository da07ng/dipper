var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('html', function() {
  gulp.src('src/views/*.html')
    .pipe(nunjucksRender({
      path: ['src/views/']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('vendor', function() {
  gulp.src(['vendor/jquery-1.12.4.min.js',
            'vendor/bootstrap.min.js'])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('script', function(callback) {
  var myConfig = Object.create(webpackConfig);
  // myConfig.plugins = myConfig.plugins.concat(
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  //     }
  //   })
  // );

  webpack(myConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }

    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));

    callback();
  });
});

gulp.task('style', function() {
  gulp.src('src/css/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('image', function() {
  gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/assets/images'));
});

gulp.task('watch', function() {
  gulp.watch('src/views/**/*.html', ['html']);
  gulp.watch('src/js/**/*.js', ['script']);
  gulp.watch('src/css/**/*.scss', ['style']);
  gulp.watch('src/images/**/*', ['image']);
});

gulp.task('build', ['html', 'vendor', 'script', 'style', 'image']);
gulp.task('default', ['html', 'vendor', 'script', 'style', 'image', 'watch']);
