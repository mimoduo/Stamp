// ================
// Required plugins
// ================

var recursiveDest = './template/pages/';
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    inlineCSS = require('gulp-inline-css'),
    inlineSource = require('gulp-inline-source'),
    prettify = require('gulp-prettify'),
    html2txt = require('gulp-html2txt');


// ================
// Jade
// ================

gulp.task('compile-jade', function() {

  return gulp.src('template/pages/**/*.jade')
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
    .pipe(gulp.dest(recursiveDest))
    .pipe(html2txt({
      ignoreImage: true,
      wordwrap: 75
    }))
    .pipe(gulp.dest(recursiveDest));

});


// ================
// Create Watch Task
// ================

gulp.task('watch', function() {

  gulp.watch('**/*', ['compile-jade']);

});


// ================
// Default 'gulp' task
// ================

gulp.task('default', ['compile-jade', 'watch']);
