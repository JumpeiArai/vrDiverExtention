"use strict";

var gulp = require('gulp');
var browserify = require('browserify');
var concat = require('gulp-concat');
var babelify = require('babelify');
var source =  require('vinyl-source-stream');

gulp.task('browserify', () => {
  return browserify({
    entries: './src/scripts/loader.js',
    transform: ['babelify'],
  })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/'));
});

