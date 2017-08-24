const AWS = require('aws-sdk');
const gulp = require('gulp');
const fs = require('fs');
const babel = require('gulp-babel');
const browserify = require('browserify');
const babelify = require('babelify');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

const EXTENSIONS = {
  html: 'text/html',
  js: 'text/javascript',
  css: 'text/css',
  jpg: 'image/jpg',
  png: 'image/png',
};

// returns the correct contentType for a given filename
function getContentType(filename) {
  const extension = filename.split('.').pop();
  return EXTENSIONS[extension];
}

// returns the key for a given filename (kinda hacky tbh)
function getKey(filename) {
  if (filename == 'build.js') {
    return 'static/build.js';
  }
  if (filename == 'index.html') {
    return 'index.html';
  }
  if (filename == 'app.css') {
    return 'static/app.css';
  }
  return `static/${filename}`;
}

// uploads a file to s3
function uploadFileToS3(filename) {
  const fullPath = `build/${filename}`;
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      throw err;
    }
    const s3 = new AWS.S3();
    const params = {
      Bucket: 'erica-charlie-pics.com',
      Key: getKey(filename),
      Body: data,
      ACL: 'public-read',
      ContentType: getContentType(filename),
    };
    s3.putObject(params, (perr, pres) => {
      if (perr) {
        console.log('error: ', perr);
      }
    });
  });
}

// converts es6 to es5, uploads files to s3
gulp.task('deploy', ['es6', 'index', 'sass', 'assets'], () => {
  const path = 'build/';
  AWS.config.loadFromPath('./aws.json');
  fs.readdir(path, (err, files) => {
    files.forEach((file) => {
      console.log(file);
      uploadFileToS3(file);
    });
  });
});

gulp.task('assets', () => {
  gulp.src('assets/*').pipe(gulp.dest('build'));
});

// copies client/index.html to build/index.html
gulp.task('index', () => {
  gulp.src('src/index.html').pipe(gulp.dest('build'));
});

gulp.task('sass', () =>
  gulp
    .src('styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('build'))
);

// converts js files from es6 to es5, then 'watches' all src files in the client dir
gulp.task('default', ['develop', 'watch']);

// converts js files from es6 to es5
gulp.task('es6', () =>
  browserify({
    entries: 'src/index.js',
    debug: true,
    paths: ['src'],
  })
    .transform(babelify)
    .on('error', gutil.log)
    .bundle()
    .on('error', gutil.log)
    .pipe(source('build.js'))
    .pipe(gulp.dest('build'))
);

gulp.task('develop', ['sass', 'es6', 'index', 'assets'], () => {
  nodemon({
    script: 'server.js',
  });
});

// watches for changes in client dir
gulp.task('watch', () => {
  gulp.watch(['src/**/*.js'], ['es6']);
  gulp.watch(['styles/**/*.scss'], ['sass']);
  gulp.watch(['src/index.html'], ['index']);
});
