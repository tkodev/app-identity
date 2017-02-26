// use strict code
"use strict";

// global node modules
var browser = require( "browser-sync" );

// functions
function launch( conf, done ) {
  browser.init( {
    server: conf.app.release,
    port: conf.app.port
  } );
  done();
}

function reload( done ) {
  browser.reload();
  done();
}

// export
module.exports.launch = launch;
module.exports.reload = reload;
