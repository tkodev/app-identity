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
function scss( conf, done ) {
  fs.removeSync( path.join( conf.app.sass_target, "css" ) ); // triggers watch
  gulp.src( path.join( conf.app.sass_source, "css/custom.sass" ) )
    .pipe( rename( {
      basename: "index"
    } ) )
    .pipe( sass( {
      outputStyle: 'compressed'
    } ).on( 'error', sass.logError ) )
    // .pipe(sourcemaps.init()) // triggers watch (?)
    .pipe( postcss( [ require( 'autoprefixer' ) ] ) )
    // .pipe(sourcemaps.write('.')) // triggers watch
    .pipe( gulp.dest( path.join( conf.app.sass_target, "css" ) ) ) // triggers watch
    .on( "end", done );
}

// exports
module.exports.scss = scss;
