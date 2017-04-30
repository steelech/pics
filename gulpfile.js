'use strict'
var AWS = require('aws-sdk');
var gulp = require('gulp');
var fs = require('fs');
var babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');

 
gulp.task('deploy', () => {
	AWS.config.loadFromPath('./aws.json');
	fs.readFile('hello.html', function(err, data) {
		if(err) { throw err; }
		var s3 = new AWS.S3();
	        s3.putObject({
		        Bucket: 'pics-website',
		        Key: 'hello.html',
		        Body: data,
			ACL: 'public-read',
			ContentType: 'text/html',
	        }, function(perr, pres) {
			if(perr) {
				console.log("error: ", perr);
			} else {
				console.log("success!");
			}
		});	
	});
});

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
