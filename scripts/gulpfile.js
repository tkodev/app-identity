// use strict code
"use strict";

// global node modules
var gulp = require("gulp");
var conf = require("./js/00-load.js");
var copy = require("./js/01-copy.js");
var sass = require("./js/02-sass.js");
var build = require("./js/03-build.js");
var serve = require("./js/04-serve.js");

// url functions
gulp.task("baseUrl", function(done) {
  conf.hugo.url = conf.hugo.baseUrl;
  done();
});
gulp.task("tempUrl", function(done) {
  conf.hugo.url = conf.hugo.tempUrl;
  done();
});

// copy function
gulp.task("copy", function(done) {
  done(); // copy(conf, done);
});

// sass function
gulp.task("sass", function(done) {
  sass.bulma(conf, done);
});

// build function
gulp.task("build", function(done) {
  build.hugo(conf, done);
});
gulp.task("lint", function(done) {
  build.lint(conf, done);
});

// server function
gulp.task("serve", function(done) {
  serve.launch(conf, done);
});
gulp.task("reload", function(done) {
  serve.reload(done);
});

// watch function
gulp.task("watch", function(done) {
  gulp.watch( conf.filters.hugo ).on("all", gulp.series( "sass", "build", "lint", "reload"));
});

// tasks
gulp.task("builder", gulp.series("baseUrl", "copy", "sass", "build", "lint", "serve", "watch"));
gulp.task("server", gulp.series("tempUrl", "copy", "sass", "build", "lint", "serve", "watch"));
