// use strict code
"use strict";

// global node modules
var browser = require("browser-sync");

// functions
function launch(conf, callback) {
  browser.init({
    server: conf.hugo.public,
    port: conf.hugo.port
  });
  callback();
}

function reload(callback) {
  browser.reload();
  callback();
}

// export
module.exports.launch = launch;
module.exports.reload = reload;
