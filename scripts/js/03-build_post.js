// use strict code
"use strict";

// global node modules
var gulp = require( "gulp" );
var path = require( "path" );
var fs = require( "fs-extra" );
var cp = require( "child_process" );
var gutil = require( "gulp-util" );
var prettify = require( "gulp-jsbeautifier" );

// hexo function
function app( conf, done ) {
  fs.removeSync( conf.app.release );
  return cp.spawn( "hexo", [ "--cwd", conf.root.app, 'generate' ], {
      stdio: "inherit"
    } )
    .on( "error", ( error ) => gutil.log( gutil.colors.red( "[Hexo]" + error.message ) ) )
    .on( "close", done );
}

// lint function
function lint( conf, done ) {
  gulp.src( path.join( conf.app.release, "/**/*.html" ) )
    .pipe( prettify( {
      indent_size: 2,
      preserve_newlines: false
    } ) )
    .pipe( gulp.dest( conf.app.release ) )
    .on( "end", done );
}

// exports
module.exports.app = app;
module.exports.lint = lint;
