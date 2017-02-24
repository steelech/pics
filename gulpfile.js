'use strict'

var gulp = require('gulp');
var fs = require('fs');
var babel = require('gulp-babel')

gulp.task('default', function() {
	return gulp.src('client/**/*.js')
	.pipe(babel())
	.pipe(gulp.dest('build'));
});

gulp.task('es6', function() {

});
