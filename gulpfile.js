"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

gulp.task("style", function() {
  gulp.src("style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: "last 2 versions"})
    ]))
    .pipe(gulp.dest("./"));
});

gulp.task("style-return", function() {
  return gulp.src("style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: "last 2 versions"})
    ]))
    .pipe(gulp.dest("./"));
});


gulp.task("task", function() {
  gulp.watch("style.scss", ["style"]);
});

gulp.task("task-return", function() {
  gulp.watch("style.scss", ["style-return"]);
});

