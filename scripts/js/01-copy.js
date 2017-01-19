// use strict code
"use strict";

// global node modules
var gulp = require("gulp");
var path = require("path");
var fs = require("fs-extra");
var globby = require("globby");
var minimatch = require("minimatch")

// function
function copy(conf, callback) {
  fs.removeSync(conf.hugo.projects);
  var paths = globby.sync(conf.filters.projects);
  for (var i in paths) {
    var mdPath = paths[i];
    var mdDestPath = path.join(conf.hugo.projects, path.relative(conf.root.projects, mdPath));
    var assetPath = path.join(path.dirname(mdPath), "assets");
    var assetDestPath = path.join(conf.hugo.projects, path.relative(conf.root.projects, assetPath));
    fs.copySync(mdPath, mdDestPath, function(file) {
      return minimatch(file, "**/.*") ? false : true;
    })
    fs.copySync(assetPath, assetDestPath, function(file) {
      return minimatch(file, "**/.*") ? false : true;
    })
  }
  callback();
};

//exports
module.exports = copy;
