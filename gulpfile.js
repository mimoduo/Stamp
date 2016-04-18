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
    rename = require('gulp-rename');

// ================
// Jade
// ================

gulp.task('jade', ['postcss'], function() {

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

gulp.task('postcss', function() {

  return gulp.src([
    './templates/**/postcss/styles.css',
    './templates/**/postcss/styles-embedded.css'
  ])
    .pipe(postcss([
      require('postcss-simple-vars'),
      require('postcss-nested')
    ]))
    .pipe(rename({
      prefix: 'processed-'
    }))
    .pipe(gulp.dest('./templates'));

});


// ================
// Create Watch Task
// ================

gulp.task('watch', function() {

  gulp.watch('templates/**/pages/**/*.jade', ['jade']);
  gulp.watch('templates/**/postcss/*.css', ['jade']);

});


// ================
// Default 'gulp' task
// ================

gulp.task('default', ['jade', 'watch']);
