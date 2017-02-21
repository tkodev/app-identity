// use strict code
"use strict";

// global node modules
var gulp = require("gulp");
var path = require("path");
var fs = require("fs-extra");
var cp = require("child_process");
var gutil = require("gulp-util");
var prettify = require("gulp-jsbeautifier");

// hexo function
function app(conf, callback) {
  fs.removeSync(conf.app.release);
  console.log(conf.app.config);
  return cp.spawn("hexo", ["generate","--config", conf.app.config_base+","+conf.app.config], {
      stdio: "inherit"
    })
    .on("error", (error) => gutil.log(gutil.colors.red("[Hexo]" + error.message)))
    .on("close", callback);
}

// lint function
function lint(conf, done) {
  gulp.src(path.join(conf.app.release, "/**/*.html"))
    .pipe(prettify({
      indent_size: 2,
      preserve_newlines: false
    }))
    .pipe(gulp.dest(conf.app.release))
    .on("end", done);
}

// exports
module.exports.app = app;
module.exports.lint = lint;
