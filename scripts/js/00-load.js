// use strict code
"use strict";

// global node modules
var path = require("path");
var fs = require("fs-extra");
var yaml = require("js-yaml");

// load config
var {
  root,
  app,
  filters
} = loadConfigH(); // Load app config
function loadConfigH() {
  let ymlFile = fs.readFileSync("config/config.yml", "utf8");
  return yaml.load(ymlFile);
}

// logic
root.app = path.join(__dirname, "../", root.app);
root.projects = path.join(__dirname, "../", root.projects);
app.release = path.join(root.app, app.release);
app.sources = path.join(root.app, app.sources);
app.projects = path.join(root.app, app.projects);
var globPrepend = function(prepend, v) {
  if (v.charAt(0) === "/") {
    return v;
  } else if (v.charAt(0) === "!") {
    return "!" + path.join(prepend, v.substring(1));
  } else {
    return path.join(prepend, v);
  }
}
filters.sass = filters.sass.concat(filters.ignore).map(function(v) {
  return globPrepend(root.app, v);
});
filters.app = filters.app.concat(filters.ignore).map(function(v) {
  return globPrepend(root.app, v);
});
filters.projects = filters.projects.concat(filters.ignore).map(function(v) {
  return globPrepend(root.projects, v);
});

// export
var conf = {
  "root": root,
  "app": app,
  "filters": filters,
}
module.exports = conf;
