// ================
// Required plugins
// ================

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    postcss = require('gulp-postcss'),
    inlineCSS = require('gulp-inline-css'),
    inlineSource = require('gulp-inline-source'),
    prettify = require('gulp-prettify'),
    html2txt = require('gulp-html2txt'),
    path = require('path');

// ================
// Jade
// ================

gulp.task('compile-jade', ['process-postcss'], function() {

  return gulp.src('templates/**/pages/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(inlineSource())
    .pipe(inlineCSS({
      removeStyleTags: false
    }))
    .pipe(prettify({
      indent_size: 2
    }))
    .pipe(gulp.dest('./templates'))
    .pipe(html2txt({
      ignoreImage: true,
      wordwrap: 75
    }))
    .pipe(gulp.dest('./templates'));

});


// ================
// Postcss
// ================

gulp.task('process-postcss', function() {

  return gulp.src('./templates/**/postcss/*.css')
    .pipe(postcss([
      require('postcss-simple-vars')
    ]))
    .pipe(gulp.dest('./templates'));

});


// ================
// Create Watch Task
// ================

gulp.task('watch', function() {

  gulp.watch('templates/**/pages/**/*.jade', ['compile-jade']);
  gulp.watch('templates/**/postcss/*.css', ['compile-jade']);

});


// ================
// Default 'gulp' task
// ================

gulp.task('default', ['compile-jade', 'watch']);
