// ================
// Required plugins
// ================

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    inlineCSS = require('gulp-inline-css'),
    inlineSource = require('gulp-inline-source'),
    html2txt = require('gulp-html2txt'),
    livereload = require('gulp-livereload');


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
    .pipe(gulp.dest(paths.jade.dest))
    .pipe(livereload());

});


// ================
// TXT
// ================

gulp.task('create-txt', ['compile-jade'], function() {

  return gulp.src(paths.html.src)
    .pipe(html2txt(75))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(livereload());

});


// ================
// Create Watch Task
// ================

gulp.task('watch', function() {

  livereload.listen();
  gulp.watch('stamps/**/**/*', ['compile-jade', 'create-txt']);

});


// ================
// Default 'gulp' task
// ================

gulp.task('default', ['compile-jade', 'create-txt', 'watch']);
