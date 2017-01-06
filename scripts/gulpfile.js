// load-config
  // Import modules
    var gulp              = require("gulp"),
        fs                = require("fs-extra"),
        yaml              = require("js-yaml"),
        path              = require("path"),
        yargs             = require("yargs")
  // Init
    const PRODUCTION      = !!(yargs.argv.production                      );
    var { PORT, HUGO, THEME, PROJECTS } = loadConfigH();                        // Load hugo config
    function loadConfigH() {
      let ymlFile = fs.readFileSync( "config/hugo.yml", "utf8"            );
      return yaml.load(ymlFile);
    }
    var { COMPATIBILITY, SOURCE       } = loadConfigB();                        // Load build config
    function loadConfigB() {
      let ymlFile = fs.readFileSync( "config/build.yml", "utf8"           );
      return yaml.load(ymlFile);
    }
    HUGO.public           = path.join( HUGO.root    , HUGO.public         );
    HUGO.source           = path.join( HUGO.root    , HUGO.source         );
    HUGO.static           = path.join( HUGO.root    , HUGO.static         );
    HUGO.content          = path.join( HUGO.root    , HUGO.content        );
    HUGO.filters          = HUGO.filters.map(function(v){
                            return path.join( HUGO.root, v )
                          });
    SOURCE.js.push(         path.join( HUGO.source  , SOURCE.js_filter[0] ));
    SOURCE.js.push(         path.join( HUGO.source  , SOURCE.js_filter[1] ));
    PROJECTS.folio        = path.join( HUGO.content , PROJECTS.folio      );
    PROJECTS.filters[0]   = path.join( PROJECTS.root, PROJECTS.filters[0] );
    PROJECTS.filters[1]   = path.join( PROJECTS.root, PROJECTS.filters[1] );

  // Logging
    console.log("[Gulpfile] `load-config` loaded.");

// scss-js
  // Import modules
    var plugins           = require("gulp-load-plugins")
  // Init
    const $               = plugins();
  // Functions
    function scss() {
      return gulp.src( path.join(HUGO.source, "/scss/app.scss") )               // Load app.scss
        .pipe($.sourcemaps.init())                                              // Init sourcemaps
        .pipe($.sass({                                                          // build / concat scss
          includePaths: SOURCE.scss                                             // Paths loaded from yaml file
          })
          .on("error", $.sass.logError))
        .pipe($.autoprefixer({                                                  // Autoprefixer
          browsers: COMPATIBILITY
          }))
        .pipe($.if(PRODUCTION, $.cssnano()))                                    // In production, the CSS is compressed
        .pipe($.if(!PRODUCTION, $.sourcemaps.write()))                          // In production, the CSS is sourcemapped
        .pipe(gulp.dest( path.join(HUGO.static, "/css") ));                     // Output css files
    }
    function js() {
      return gulp.src( SOURCE.js )                                              // Paths loaded from yaml file
        .pipe($.sourcemaps.init())                                              // Init sourcemaps
        .pipe($.babel({ignore: ["what-input.js"]}))                             // Build babel - `what-input` breaks if not ignored
        .pipe($.concat("app.js"))                                               // Build / concat js
        .pipe($.if(PRODUCTION, $.uglify()                                       // In production, the file is minified
          .on("error", e => { console.log(e); })
          ))
        .pipe($.if(!PRODUCTION, $.sourcemaps.write()))                          // In production, the JS is sourcemapped
        .pipe(gulp.dest( path.join(HUGO.static, "/js") ));                      // Output js files
    }
  // Logging
    console.log("[Gulpfile] `scss-css`    loaded.");

// url
  // Functions
    function base_url(done) {
      HUGO.url = HUGO.base_url;
      done();
    }
    function temp_url(done) {
      HUGO.url = HUGO.temp_url;
      done();
    }
  // Logging
    console.log("[Gulpfile] `url`         loaded.");

// clean
  // Functions
    function clean(done) {
      fs.removeSync(HUGO.public)
      fs.removeSync(PROJECTS.folio)
      done();
    }
  // Logging
    console.log("[Gulpfile] `rimraf`      loaded.");

// copy
  // Import modules
    var globby            = require("globby"),
        minimatch         = require("minimatch")
  // Functions
    function copy(done) {
      var paths = globby.sync( PROJECTS.filters );
      for (i in paths){
        rootPath          = paths[i];
        folioPath         = path.join( PROJECTS.folio, path.relative(PROJECTS.root, rootPath ));
        fs.copySync( rootPath, folioPath, function (file) {
          return minimatch( file, "**/.*") ? false : true;
        })
      }
      done();
    }
  // Logging
    console.log("[Gulpfile] `copy`        loaded.");

// hugo
  // Import modules
    var cp                = require("child_process"),
        gutil             = require("gulp-util");
  // Functions
    gulp.task("hugo:build", (code) => {
      return cp.spawn("hugo", ["-s", HUGO.root, "-b", HUGO.url], { stdio: "inherit" })
        .on("error", (error) => gutil.log(gutil.colors.red("[Hugo]"+error.message)))
        .on("close", code);
    })
    gulp.task("hugo:watch", (code) => {
      return cp.spawn("hugo", ["-w", "-s",HUGO.root, "-b", HUGO.url], { stdio: "inherit" })
        .on("error", (error) => gutil.log(gutil.colors.red("[Hugo]"+error.message)))
        .on("close", code);
    })
    gulp.task("hugo:server", (code) => {
      return cp.spawn("hugo", ["server", "-s", HUGO.root, "-b", HUGO.url, "-p", PORT], { stdio: "inherit" })
        .on("error", (error) => gutil.log(gutil.colors.red("[Hugo]"+error.message)))
        .on("close", code);
    })
  // Logging
    console.log("[Gulpfile] `hugo`        loaded.");

// lint
  // Import modules
    var prettify          = require("gulp-jsbeautifier")
  // Functions
    gulp.task("lint", function() {
      return gulp.src( path.join( HUGO.public, "/**/*.html") )
        .pipe(prettify({
          indent_size: 2,
          preserve_newlines: false
        }))
        .pipe(gulp.dest( HUGO.public ));
    })
  // Logging
    console.log("[Gulpfile] `lint`        loaded.");

// browser
  // Import modules
    var browser           = require("browser-sync")
  // Functions
      function server(done) {
        browser.init({
          server: HUGO.public,
          port: HUGO.port
        });
        done();
      }
      function reload(done) {
        browser.reload();
        done();
      }
  // Logging
    console.log("[Gulpfile] `browsersync` loaded.");

// watch
  // Functions
    // watch
      function watch_scss_js() {
        gulp.watch( path.join( HUGO.source, "/scss/**/*.scss"  )).on("all", gulp.series( scss                       ));
        gulp.watch( path.join( HUGO.source, "/js/**/*.js"      )).on("all", gulp.series( js                         ));
      }
      function watch_server() {
        gulp.watch( HUGO.filters                    ).on("all", gulp.series( "hugo:build", "lint", browser.reload   ));
      }
  // Logging
    console.log("[Gulpfile] `watch`       loaded.");

// tasks
  // Functions
    // build
      gulp.task("build:sources", gulp.series( gulp.parallel(scss, js)                                                 ));
      gulp.task("build",         gulp.series( clean, copy, "build:sources", "hugo:build", `lint`                      ));
    // serve
      gulp.task("build:base",    gulp.series( base_url, "build"                                                       ));
      gulp.task("server:hugo",   gulp.series( temp_url, "build:sources", gulp.parallel( "hugo:server", watch_scss_js) ));
      gulp.task("server:sync",   gulp.series( temp_url, "build", server, gulp.parallel( watch_server , watch_scss_js) ));
  // Logging
    console.log("[Gulpfile] `tasks`       loaded.");
