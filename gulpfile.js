/* ================
// Required plugins
// ============= */

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    postcss = require('gulp-postcss'),
    inlineCSS = require('gulp-inline-css'),
    inlineSource = require('gulp-inline-source'),
    prettify = require('gulp-prettify'),
    html2txt = require('gulp-html2txt'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync');


/* ================
// Compile Pug
// ============= */

gulp.task('pug', ['postcss'], function() {

  return gulp.src('src/pug/pages/**/*.pug')
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
    .pipe(gulp.dest('dist'))
    .pipe(html2txt({
      ignoreImage: true,
      wordwrap: 75
    }))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});


/* ================
// Process Postcss
// ============= */

gulp.task('postcss', function() {

  return gulp.src(['src/postcss/*.css'])
    .pipe(postcss([
      require('postcss-simple-vars'),
      require('postcss-nested')
    ]))
    .pipe(gulp.dest('dist/css'));

});


/* ================
// Optimize Images
// ============= */

gulp.task('images', function() {

  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));

});


/* ================
// Browser Sync
// ============= */

gulp.task('browser-sync', function() {

	browserSync.init({
		ui: false,
		server: './',
		startPath: '/dist/sample.html',
		notify: {
			styles: {
				top: 'auto',
				bottom: '0',
				padding: '4px',
				fontSize: '12px',
				borderBottomLeftRadius: '0'
			}
		}
	});

});


/* ================
// Watch Task
// ============= */

gulp.task('watch', function() {

  gulp.watch('src/pug/**/*.pug', ['pug']);
  gulp.watch('src/postcss/*.css', ['pug']);
  gulp.watch('src/images/*', ['images']);

});


/* ================
// Default Gulp Task
// ============= */

gulp.task('default', [
  'pug', 
  'images', 
  'watch', 
  'browser-sync'
]);
