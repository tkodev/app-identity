// use strict code
"use strict";

// global node modules
var path = require( "path" );
var fs = require( "fs-extra" );
var yaml = require( "js-yaml" );

// load config
var {
  app,
  filters
} = loadConfigH(); // Load app config
function loadConfigH() {
  let ymlFile = fs.readFileSync( "config/config.yml", "utf8" );
  return yaml.load( ymlFile );
}

// logic
app.root = path.join( __dirname, "../", app.root );
app.release = path.join( app.root, app.release );
app.sources = path.join( app.root, app.sources );
app.sass_source = path.join( app.root, app.sass_source );
app.sass_target = path.join( app.root, app.sass_target );
app.projects_source = path.join( __dirname, "../", app.projects_source );
app.projects_target = path.join( app.root, app.projects_target );
var globPrepend = function( prepend, v ) {
  if ( v.charAt( 0 ) === "/" ) {
    return v;
  } else if ( v.charAt( 0 ) === "!" ) {
    return "!" + path.join( prepend, v.substring( 1 ) );
  } else {
    return path.join( prepend, v );
  }
}
filters.sass = filters.sass.concat( filters.ignore ).map( function( v ) {
  return globPrepend( app.root, v );
} );
filters.app = filters.app.concat( filters.ignore ).map( function( v ) {
  return globPrepend( app.root, v );
} );
filters.projects = filters.projects.concat( filters.ignore ).map( function( v ) {
  return globPrepend( app.projects_source, v );
} );

// export
var conf = {
  "app": app,
  "filters": filters
}

module.exports = conf;
