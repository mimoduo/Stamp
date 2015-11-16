// ========================================
// Required plugins
// ========================================

// Plugin declarations
var gulp = require('gulp');
var jade = require('gulp-jade');
var inlineCSS = require('gulp-inline-css');
var inlineSource = require('gulp-inline-source');
var html2txt = require('gulp-html2txt');
var livereload = require('gulp-livereload');


// ========================================
// Set Paths
// ========================================

var paths = {

  jade: {
    src:  'templates/**/pages/**/*.jade',
    dest: './templates',
  },
  html: {
    src:  'templates/**/pages/**/*.html',
    dest: './templates',
  }

};


// ========================================
// Jade
// ========================================

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


// ========================================
// TXT
// ========================================

gulp.task('create-txt', ['compile-jade'], function() {

  return gulp.src(paths.html.src)
    .pipe(html2txt(75))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(livereload());

});


// ========================================
// Create Watch Task
// ========================================

gulp.task('watch', function() {

  livereload.listen();
  gulp.watch('templates/**/**/*', ['compile-jade', 'create-txt']);

});


// ========================================
// Default 'gulp' task
// ========================================

gulp.task('default', ['compile-jade', 'create-txt', 'watch']);
