// use strict code
"use strict";

// global node modules
var path = require("path");
var fs = require("fs-extra");
var globby = require("globby");
var minimatch = require("minimatch")
var matter = require('gray-matter');
var yaml = require("js-yaml");

// function
function copy(conf, callback) {
  fs.removeSync(conf.app.projects);
  var paths = globby.sync(conf.filters.projects);
  for (var i in paths) {
    var mdPath = paths[i];
    // edit(mdPath, path.dirname(path.relative(conf.root.projects, mdPath)));
    var mdDestPath = path.join(conf.app.projects, path.relative(conf.root.projects, mdPath));
    var assetPath = path.join(path.dirname(mdPath), "assets");
    var assetDestPath = path.join(conf.app.projects, path.relative(conf.root.projects, assetPath));
    fs.copySync(mdPath, mdDestPath, {
      preserveTimestamps: true,
      filter: function(file) {
        return minimatch(file, "**/.*") ? false : true;
      }
    }, function(err) {
      if (err) return console.error(err)
    })
    fs.copySync(assetPath, assetDestPath, {
      preserveTimestamps: true,
      filter: function(file) {
        return minimatch(file, "**/.*") ? false : true;
      }
    }, function(err) {
      if (err) return console.error(err)
    })
  }
  callback();
};

function edit(mdPath, relPath) {
  // console.log(mdPath);
  var mdFile = matter.read(mdPath);
  if (mdFile.data.hasOwnProperty("photos")) {
    mdFile.data.photos = mdFile.data.photos.filter(function(val){
      return !val.includes("cover.");
    });
    if (mdFile.data.photos == 0){
      delete mdFile.data.photos;
    }
  }
  // if (!mdFile.data.hasOwnProperty("photos")) {
  //   mdFile.data.photos = [];
  // }
  // if (mdFile.data.hasOwnProperty("cover")) {
  //   mdFile.data.photos.push(mdFile.data.cover);
  //   delete mdFile.data.cover;
  // }
  // if (mdFile.data.hasOwnProperty("photo")) {
  //   mdFile.data.photos = mdFile.data.photos.concat(mdFile.data.photo);
  //   delete mdFile.data.photo;
  // }
  // if (mdFile.data.hasOwnProperty("parent")) {
  //   mdFile.data.path = relPath;
  //   delete mdFile.data.parent;
  // }
  var mdData = "---\n" + yaml.safeDump(mdFile.data) + "---\n" + mdFile.content;
  // console.log(mdData);
  // fs.writeFileSync(mdPath, mdData, {flag: "w"}, function(err) {
  //   if (err) return console.error(err)
  // });
}

//exports
module.exports = copy;
