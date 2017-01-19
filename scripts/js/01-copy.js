// use strict code
"use strict";

// global node modules
var gulp = require("gulp");
var path = require("path");
var fs = require("fs-extra");
var globby = require("globby");
var minimatch = require("minimatch")
var matter = require('gray-matter');

// function
function copy(conf, callback) {
  fs.removeSync(conf.hugo.projects);
  var paths = globby.sync(conf.filters.projects);
  for (var i in paths) {
    var mdPath = paths[i];
    // matter.read(mdPath).data;
    var mdDestPath = path.join(conf.hugo.projects, path.relative(conf.root.projects, mdPath));
    var assetPath = path.join(path.dirname(mdPath), "assets");
    var assetDestPath = path.join(conf.hugo.projects, path.relative(conf.root.projects, assetPath));
    fs.copySync(mdPath, mdDestPath, {preserveTimestamps: true, filter: function(file) {
      return minimatch(file, "**/.*") ? false : true;
    }}, function(err){
      if (err) return console.error(err)
    })
    fs.copySync(assetPath, assetDestPath, {preserveTimestamps: true, filter: function(file) {
      return minimatch(file, "**/.*") ? false : true;
    }}, function(err){
      if (err) return console.error(err)
    })
  }
  callback();
};

//exports
module.exports = copy;
