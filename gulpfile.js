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
var sass = require('gulp-sass');

// returns the correct contentType for a given filename
function getContentType(filename) {
	var extension = filename.split('.').pop();

	switch(extension) {
		case 'html':
			console.log("html file");
			return "text/html";
			break;
		
		case 'js':
			console.log("javascript file");
			return "text/javascript";
			break;

		case 'css':
			console.log("css file");
			return "text/css";
			break;

		case 'jpg':
			console.log('jpg file');
			return "image/jpg";
			break;

		case 'png':
			console.log('png file');
			return "image/png";
			break;

		default:
			console.log("bad filename");
			return "none";
			break;	
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
	if(filename == "app.css") {
		return "static/app.css"
	}

	return "static/" + filename;
}

// uploads a file to s3
function uploadFileToS3(filename) {
	var fullPath = 'build/' + filename;
	fs.readFile(fullPath, function(err, data) {
		if(err) {
			throw err;
		}
		var s3 = new AWS.S3();
		var params = {
			Bucket: 'erica-charlie-pics.com',
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
gulp.task('deploy', ['es6', 'index', 'sass', 'assets'], () => {
	var path = 'build/';
	AWS.config.loadFromPath('./aws.json');
	fs.readdir(path, function(err, files) {
		files.forEach(function(file) {
			console.log(file);
			uploadFileToS3(file);
		});
	});
});

gulp.task('assets', () => {
	gulp.src('assets/*')
	.pipe(gulp.dest('build'));

});

// copies client/index.html to build/index.html
gulp.task('index', () => {
	gulp.src('src/index.html')
	.pipe(gulp.dest('build'));
});

gulp.task('sass', () => {
	return gulp.src('styles/**/*.scss')
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulp.dest('build'));
});


// converts js files from es6 to es5, then 'watches' all src files in the client dir
gulp.task('default', ['develop', 'watch']);

// converts js files from es6 to es5
gulp.task('es6', function() {
	return browserify({
		entries: 'src/index.js',
		debug: true,
		paths: [
			'src'
		]
	})
	.transform(babelify)
	.on('error', gutil.log)
	.bundle()
	.on('error', gutil.log)
	.pipe(source('build.js'))
	.pipe(gulp.dest('build'));
});

gulp.task('develop', ['sass', 'es6', 'index', 'assets'], function() {
	nodemon({
		script: "server.js",
		//watch: ["server.js"]
	})

});

// watches for changes in client dir
gulp.task('watch', function() {
	gulp.watch(['src/**/*.js'], ['es6']);
	gulp.watch(['styles/**/*.sass'], ['sass']);
	gulp.watch(['src/index.html'], ['index']);
	
});
