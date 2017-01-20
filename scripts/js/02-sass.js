// use strict code
"use strict";

// global node modules
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

// bulma function
function bulma(conf, done) {
  gulp.src(path.join(conf.hugo.source, "bulma-0.3.1/bulma.sass"))
    .pipe(sourcemaps.init())
    .pipe(postcss([require('precss'), require('autoprefixer')]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.join(conf.hugo.static, "bulma-0.3.1/css")))
    .on("end", done);
}

// exports
module.exports.bulma = bulma;
