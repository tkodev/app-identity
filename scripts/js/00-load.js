// use strict code
"use strict";

// global node modules
var path = require("path");
var fs = require("fs-extra");
var yargs = require("yargs");
var yaml = require("js-yaml");

// load config
const prod = !!(yargs.argv.production);
var {
  hugo,
  root,
  filters
} = loadConfigH(); // Load hugo config
function loadConfigH() {
  let ymlFile = fs.readFileSync("config/hugo.yml", "utf8");
  return yaml.load(ymlFile);
}

// logic
root.hugo = path.join(__dirname, "../", root.hugo);
root.projects = path.join(__dirname, "../", root.projects);
hugo.public = path.join(root.hugo, hugo.public);
hugo.source = path.join(root.hugo, hugo.source);
hugo.static = path.join(root.hugo, hugo.static);
hugo.content = path.join(root.hugo, hugo.content);
hugo.projects = path.join(root.hugo, hugo.projects);
var globPrepend = function(prepend, v){
  if (v.charAt(0) === "/") {
    return v;
  } else if (v.charAt(0) === "!") {
    return "!" + path.join(prepend, v.substring(1));
  } else {
    return path.join(prepend, v);
  }
}
filters.sass = filters.sass.concat(filters.ignore).map(function(v){
  return globPrepend(root.hugo, v);
});
filters.hugo = filters.hugo.concat(filters.ignore).map(function(v){
  return globPrepend(root.hugo, v);
});
filters.projects = filters.projects.concat(filters.ignore).map(function(v){
  return globPrepend(root.projects, v);
});

// export
var conf = {
  "prod": prod,
  "hugo": hugo,
  "root": root,
  "filters": filters,
}
module.exports = conf;
