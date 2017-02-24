'use strict'

var gulp = require('gulp');
var fs = require('fs');
var babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');

gulp.task('default', ['watch', 'es6']);

gulp.task('es6', function() {
	browserify({
		entries: 'client/index.js',
		debug: true
	})
	.transform(babelify)
	.on('error', gutil.log)
	.bundle()
	.on('error', gutil.log)
	.pipe(source('build.js'))
	.pipe(gulp.dest('build'));

});

gulp.task('watch', function() {
	gulp.watch('client/**/*.js', ['default']);
});
