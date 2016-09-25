// ================
// Required plugins
// ================

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    postcss = require('gulp-postcss'),
    inlineCSS = require('gulp-inline-css'),
    inlineSource = require('gulp-inline-source'),
    prettify = require('gulp-prettify'),
    html2txt = require('gulp-html2txt'),
    rename = require('gulp-rename');


// ================
// Pug
// ================

gulp.task('pug', ['postcss'], function() {

  return gulp.src('./template/pages/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(inlineSource())
    .pipe(inlineCSS({
      removeStyleTags: false
    }))
    .pipe(prettify({
      indent_size: 2
    }))
    .pipe(gulp.dest('./template/pages'))
    .pipe(html2txt({
      ignoreImage: true,
      wordwrap: 75
    }))
    .pipe(gulp.dest('./template/pages'));

});


// ================
// Postcss
// ================

gulp.task('postcss', function() {

  return gulp.src([
    './template/postcss/styles.css',
    './template/postcss/styles-embedded.css'
  ])
    .pipe(postcss([
      require('postcss-simple-vars'),
      require('postcss-nested')
    ]))
    .pipe(rename({
      prefix: 'processed-'
    }))
    .pipe(gulp.dest('./template/postcss'));

});


// ================
// Create Watch Task
// ================

gulp.task('watch', function() {

  gulp.watch('template/pug/*.pug', ['pug']);
  gulp.watch('template/pages/**/*.pug', ['pug']);
  gulp.watch('template/postcss/*.css', ['pug']);

});


// ================
// Default 'gulp' task
// ================

gulp.task('default', ['pug', 'watch']);
