'use strict'
var AWS = require('aws-sdk');
var gulp = require('gulp');
var fs = require('fs');
var babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');

// returns the correct contentType for a given filename
function getContentType(filename) {
	if(filename.indexOf(".html") != -1) {
		return "text/html";
	}
	if(filename.indexOf(".js") != -1) {
		return "text/javascript";
	}
	if(filename.indexOf(".css") != -1) {
		return "text/css";
	}
}

// returns the key for a given filename (kinda hacky tbh)
function getKey(filename) {
	if(filename == "build.js") {
		return "static/build.js";
	}
	if(filename == "index.html") {
		return "index.html";
	}
	if(filename == "styles.css") {
		return "static/styles.css"
	}
}

// uploads a file to s3
function uploadFileToS3(filename) {
	var fullPath = 'client/build/' + filename;
	fs.readFile(fullPath, function(err, data) {
		if(err) {
			throw err;
		}
		var s3 = new AWS.S3();
		var params = {
			Bucket: 'pics-website',
			Key: getKey(filename),
			Body: data,
			ACL: 'public-read',
			ContentType: getContentType(filename) 
		};
		s3.putObject(params, function(perr, pres) {
			if(perr) {
				console.log("error: ", perr);
			}
		});
	});
}

// converts es6 to es5, uploads files to s3
gulp.task('deploy', ['es6', 'index', 'css'], () => {
	var path = 'client/build/';
	AWS.config.loadFromPath('./aws.json');
	fs.readdir(path, function(err, files) {
		files.forEach(function(file) {
			console.log(file);
			uploadFileToS3(file);
		});
	});
});

// copies client/index.html to build/index.html
gulp.task('index', () => {
	gulp.src('client/index.html')
	.pipe(gulp.dest('client/build'));
});

gulp.task('css', () => {
	gulp.src('client/css/styles.css')
	.pipe(gulp.dest('client/build'));
});

// converts js files from es6 to es5, then 'watches' all src files in the client dir
gulp.task('default', ['frontend-dev', 'watch']);

// converts js files from es6 to es5
gulp.task('es6', function() {
	return browserify({
		entries: 'client/index.js',
		debug: true
	})
	.transform(babelify)
	.on('error', gutil.log)
	.bundle()
	.on('error', gutil.log)
	.pipe(source('build.js'))
	.pipe(gulp.dest('client/build'));
});

gulp.task('backend-dev', function() {
	nodemon({
		script: "api/server.js",
		watch: ["api/server.js"],
		ext: "js",
	}).on("restart", function() {
		console.log("restarting backend server");
	});
});

gulp.task('frontend-dev', ['css', 'es6'], function() {
	nodemon({
		script: "client/server.js",
		watch: ["client/server.js"]
	})

});

// watches for changes in client dir
gulp.task('watch', function() {
	gulp.watch(['client/**/*.js'], ['es6']);
	gulp.watch(['client/**/*.css'], ['css']);
});
