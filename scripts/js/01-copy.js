// use strict code
"use strict";

// global node modules
var path = require( "path" );
var fs = require( "fs-extra" );
var globby = require( "globby" );
var minimatch = require( "minimatch" )
var matter = require( 'gray-matter' );
var yaml = require( "js-yaml" );

// function
function copy( conf, callback ) {
  fs.removeSync( conf.app.projects_target );
  var paths = globby.sync( conf.filters.projects );
  for ( var i in paths ) {
    var mdPath = paths[ i ];
    var assetPath = path.join( path.dirname( mdPath ), "assets" );
    var relPath = path.relative( conf.app.projects_source, path.dirname( mdPath ) );
    var mdDestPath = path.join( conf.app.projects_target, relPath, "index.md" );
    var assetDestPath = path.join( conf.app.projects_target, relPath, "index" );
    // rewrite(mdPath);
    fs.copySync( mdPath, mdDestPath, {
      preserveTimestamps: true,
      filter: function( file ) {
        return minimatch( file, "**/.*" ) ? false : true;
      }
    }, function( err ) {
      if ( err ) return console.error( err )
    } )
    fs.copySync( assetPath, assetDestPath, {
      preserveTimestamps: true,
      filter: function( file ) {
        return minimatch( file, "**/.*" ) ? false : true;
      }
    }, function( err ) {
      if ( err ) return console.error( err )
    } )
  }
  callback();
};

function rewrite( mdPath ) {
  console.log( mdPath );
  var mdFile = matter.read( mdPath );
  var mdData = {};
  appendProp( mdFile.data, mdData, "title" );
  appendProp( mdFile.data, mdData, "date" );
  appendProp( mdFile.data, mdData, "link" );
  appendProp( mdFile.data, mdData, "code" );
  appendProp( mdFile.data, mdData, "program" );
  appendProp( mdFile.data, mdData, "course" );
  appendProp( mdFile.data, mdData, "project" );
  appendProp( mdFile.data, mdData, "categories");
  appendProp( mdFile.data, mdData, "tags");
  appendProp( mdFile.data, mdData, "cover");
  appendProp( mdFile.data, mdData, "photos" );
  mdData = "---\n" + yaml.safeDump( mdData ) + "---\n" + mdFile.content;
  console.log( mdData );
  fs.writeFileSync( mdPath, mdData, {
    flag: "w"
  }, function( err ) {
    if ( err ) return console.error( err )
  } );
}

function appendProp( curArr, tarArr, prop ) {
  if ( curArr.hasOwnProperty( prop ) ) {
    var newProp = prop;
    tarArr[ newProp ] = curArr[ prop ];
  }
}

//exports
module.exports = copy;
