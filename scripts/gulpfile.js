// use strict code
"use strict";

// global node modules
var gulp = require("gulp");
var conf = require("./js/00-load.js");
var copy = require("./js/01-copy.js");
var build_pre = require("./js/02-build_pre.js");
var build_post = require("./js/03-build_post.js");
var serve = require("./js/04-serve.js");

// url functions
gulp.task("config_builder", function(done) {
  conf.app.config = conf.app.config_builder;
  done();
});
gulp.task("config_server", function(done) {
  conf.app.config = conf.app.config_server;
  done();
});

// copy function
gulp.task("copy", function(done) {
  copy(conf, done);
  // done();
});

// sass function
gulp.task("build:pre", function(done) {
  // build_pre.bulma(conf, done);
});

// build function
gulp.task("build:post:app", function(done) {
  build_post.app(conf, done);
});
gulp.task("build:post:lint", function(done) {
  build_post.lint(conf, done);
});
gulp.task("build:post", gulp.series("build:post:app", "build:post:lint"));

// server function
gulp.task("serve", function(done) {
  serve.launch(conf, done);
});
gulp.task("reload", function(done) {
  serve.reload(done);
});

// watch function
gulp.task("watch", function(done) {
  gulp.watch(conf.filters.sass).on("change", gulp.series("build:pre"));
  gulp.watch(conf.filters.app).on("change", gulp.series("build:post", "reload"));
});

// tasks
gulp.task("build:all", gulp.series("copy", "build:pre", "build:post"));
gulp.task("builder", gulp.series("config_builder", "build:all", "serve", "watch"));
gulp.task("server", gulp.series("config_server", "build:all", "serve", "watch"));
