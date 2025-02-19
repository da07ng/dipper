var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('html', function() {
  gulp.src(['src/views/*.html',
            'src/views/application/*.html',
            'src/views/dashboard/*.html',
            'src/views/account/*.html'])
    .pipe(nunjucksRender({
      path: ['src/views/']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('webmap', function() {
  gulp.src('src/views/map/webmap.html')
    .pipe(nunjucksRender({
      path: ['src/views/']
    }))
    .pipe(rename('viewer.html'))
    .pipe(gulp.dest('dist/webmap'));
});

gulp.task('webscene', function() {
  gulp.src('src/views/map/webscene.html')
    .pipe(nunjucksRender({
      path: ['src/views/']
    }))
    .pipe(rename('viewer.html'))
    .pipe(gulp.dest('dist/webscene'));
});

gulp.task('vendor', function() {
  gulp.src(['vendor/jquery-1.12.4.min.js',
            'vendor/bootstrap.min.js',
            'vendor/jquery.twbsPagination.min.js'])
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
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('image', function() {
  gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/assets/images'));
});

gulp.task('other', function() {
  gulp.src('src/other/**/*')
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch('src/views/**/*.html', ['html', 'webmap', 'webscene']);
  gulp.watch('src/js/**/*.js', ['script']);
  gulp.watch('src/css/**/*.scss', ['style']);
  gulp.watch('src/images/**/*', ['image']);
});

gulp.task('build', ['html', 'webmap', 'webscene', 'vendor', 'script', 'style', 'image']);
gulp.task('default', ['html', 'webmap', 'webscene', 'vendor', 'script', 'style', 'image', 'watch']);
