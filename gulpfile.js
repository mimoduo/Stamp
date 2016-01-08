// ================
// Required plugins
// ================

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    inlineCSS = require('gulp-inline-css'),
    inlineSource = require('gulp-inline-source'),
    html2txt = require('gulp-html2txt');


// ================
// Set File Paths
// ================

var paths = {

  jade: {
    src:  'stamps/**/pages/**/*.jade',
    dest: './stamps',
  },
  html: {
    src:  'stamps/**/pages/**/*.html',
    dest: './stamps',
  }

};


// ================
// Jade
// ================

gulp.task('compile-jade', function() {

  return gulp.src(paths.jade.src)
    .pipe(jade({
      pretty: true
    }))
    .pipe(inlineSource())
    .pipe(inlineCSS({
      removeStyleTags: false
    }))
    .pipe(gulp.dest(paths.jade.dest));

});


// ================
// TXT
// ================

gulp.task('create-txt', ['compile-jade'], function() {

  return gulp.src(paths.html.src)
    .pipe(html2txt(75))
    .pipe(gulp.dest(paths.html.dest));

});


// ================
// Create Watch Task
// ================

gulp.task('watch', function() {

  gulp.watch('stamps/**/**/*', ['compile-jade', 'create-txt']);

});


// ================
// Default 'gulp' task
// ================

gulp.task('default', ['compile-jade', 'create-txt', 'watch']);
