// use strict code
"use strict";

// global node modules
var gulp = require( "gulp" );
var path = require( "path" );
var fs = require( "fs-extra" );
var rename = require( "gulp-rename" );
var sass = require( "gulp-sass" );
var postcss = require( 'gulp-postcss' );
// var sourcemaps = require('gulp-sourcemaps');

// bulma function
function bulma( conf, done ) {
  fs.removeSync( path.join( conf.hugo.static, "bulma-0.3.1/css" ) ); // triggers watch
  gulp.src( path.join( conf.hugo.source, "bulma-0.3.1/custom.sass" ) )
    .pipe( rename( {
      basename: "bulma",
      suffix: '.min'
    } ) )
    .pipe( sass( {
      outputStyle: 'compressed'
    } ).on( 'error', sass.logError ) )
    // .pipe(sourcemaps.init()) // triggers watch (?)
    .pipe( postcss( [ require( 'autoprefixer' ) ] ) )
    // .pipe(sourcemaps.write('.')) // triggers watch
    .pipe( gulp.dest( path.join( conf.hugo.static, "bulma-0.3.1/css" ) ) ) // triggers watch
    .on( "end", done );
}

// exports
module.exports.bulma = bulma;
