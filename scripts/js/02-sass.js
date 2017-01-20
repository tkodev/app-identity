// use strict code
"use strict";

// global node modules
var gulp = require("gulp");
var path = require("path");
var fs = require("fs-extra");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

// bulma function
function bulma(conf, done) {
  fs.removeSync(path.join(conf.hugo.static, "bulma-0.3.1/css"));
  gulp.src(path.join(conf.hugo.source, "bulma-0.3.1/bulma.sass"))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.join(conf.hugo.static, "bulma-0.3.1/css")))
    .on("end", done);
}

// exports
module.exports.bulma = bulma;