// load-config
  // Import modules
    var gulp              = require('gulp'),
        fs                = require('fs'),
        yaml              = require('js-yaml'),
        path              = require('path')
  // Init
    var { PORT, HUGO, THEME       } = loadConfigH();                            // Load hugo config
    function loadConfigH() {
      let ymlFile = fs.readFileSync( 'config/hugo.yml', 'utf8'        );
      return yaml.load(ymlFile);
    }
    var { COMPATIBILITY, SOURCES  } = loadConfigS();                            // Load scss-js config
    function loadConfigS() {
      let ymlFile = fs.readFileSync( 'config/scss-js.yml', 'utf8'     );
      return yaml.load(ymlFile);
    }
    HUGO.public           = path.join(  HUGO.root   , HUGO.public     );
    HUGO.watch            = HUGO.watch.map(function(v){ return path.join( HUGO.root, v )});
    THEME.name            = THEME.root.split( path.sep ).pop();
    THEME.source          = path.join(  THEME.root  , THEME.source    );
    THEME.static          = path.join(  THEME.root  , THEME.static    );
    THEME.appjs           = path.join(  THEME.source, '/js/app.js'    );
    THEME.alljs           = path.join(  THEME.source, '/js/!(app).js' );

  // Logging
    console.log('[Gulpfile] `load-config` loaded.');

// scss-js
  // Import modules
    var plugins           = require('gulp-load-plugins'),
        yargs             = require('yargs')
  // Init
    const $               = plugins();
    const PRODUCTION      = !!(yargs.argv.production);
  // Functions
    function scss() {
      return gulp.src( path.join(THEME.source, '/scss/app.scss') )              // Load app.scss
        .pipe($.sourcemaps.init())                                              // Init sourcemaps
        .pipe($.sass({                                                          // build / concat scss
          includePaths: SOURCES.scss                                              // Paths loaded from yaml file
          })
          .on('error', $.sass.logError))
        .pipe($.autoprefixer({                                                  // Autoprefixer
          browsers: COMPATIBILITY
          }))
        .pipe($.if(PRODUCTION, $.cssnano()))                                    // In production, the CSS is compressed
        .pipe($.if(!PRODUCTION, $.sourcemaps.write()))                          // In production, the CSS is sourcemapped
        .pipe(gulp.dest( path.join(THEME.static, '/css') ));                    // Output css files
    }
    SOURCES.js.push( THEME.appjs ); SOURCES.js.push( THEME.alljs );                 // Load app.js + *.js files - gulp doesn't follow js includes
    function js() {
      return gulp.src( SOURCES.js )                                               // Paths loaded from yaml file
        .pipe($.sourcemaps.init())                                              // Init sourcemaps
        .pipe($.babel({ignore: ['what-input.js']}))                             // Build babel - `what-input` breaks if not ignored
        .pipe($.concat('app.js'))                                               // Build / concat js
        .pipe($.if(PRODUCTION, $.uglify()                                       // In production, the file is minified
          .on('error', e => { console.log(e); })
          ))
        .pipe($.if(!PRODUCTION, $.sourcemaps.write()))                          // In production, the JS is sourcemapped
        .pipe(gulp.dest( path.join(THEME.static, '/js') ));                     // Output js files
    }
  // Logging
    console.log('[Gulpfile] `scss-css`    loaded.');

// rimraf
  // Import modules
    var rimraf            = require('rimraf')
  // Functions
    function clean(done) {
      rimraf(HUGO.public, done);                                                // rm -rf
    }
  // Logging
    console.log('[Gulpfile] `rimraf`      loaded.');

// hugo
  // Import modules
    var cp                = require('child_process'),
        gutil             = require('gulp-util');
  // Functions
    gulp.task('hugo_build', (code) => {
      return cp.spawn('hugo', ['-t', THEME.name, '-s',HUGO.root], { stdio: 'inherit' })
        .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
        .on('close', code);
    })
    gulp.task('hugo_server', (code) => {
      return cp.spawn('hugo', ['server', '-p', PORT, '-t', THEME.name, '-s',HUGO.root], { stdio: 'inherit' })
        .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
        .on('close', code);
    })
    gulp.task('hugo_watch', (code) => {
      return cp.spawn('hugo', ['-w','-t', THEME.name, '-s',HUGO.root], { stdio: 'inherit' })
        .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
        .on('close', code);
    })
  // Logging
    console.log('[Gulpfile] `hugo`        loaded.');

// lint
  // Import modules
    var prettify          = require('gulp-jsbeautifier')
  // Functions
    gulp.task('lint', function() {
      return gulp.src( path.join( HUGO.public, '/**/*.html') )
        .pipe(prettify({
          indent_size: 2,
          preserve_newlines: false
        }))
        .pipe(gulp.dest( HUGO.public ));
    })
  // Logging
    console.log('[Gulpfile] `lint`        loaded.');

// browser
  // Import modules
    var browser           = require('browser-sync')
  // Functions
      function server(done) {
        browser.init({
          server: {
            baseDir: HUGO.public
          }, port: PORT
        });
        done();
      }
      function reload(done) {
        browser.reload();
        done();
      }
  // Logging
    console.log('[Gulpfile] `browsersync` loaded.');

// watch
  // Functions
    // watch
      function watch_scss_js() {
        gulp.watch( path.join( THEME.source, '/scss/**/*.scss'  )).on('all', gulp.series( scss                  ));
        gulp.watch( path.join( THEME.source, '/js/**/*.js'      )).on('all', gulp.series( js                    ));
      }
      function watch_server() {
        gulp.watch( HUGO.watch                                   ).on('all', gulp.series( 'hugo_build', 'lint', browser.reload ));
      }
  // Logging
    console.log('[Gulpfile] `watch`       loaded.');

// tasks
  // Functions
    // tasks
    gulp.task('build',        gulp.series( gulp.parallel(scss, js)                                              ));
    gulp.task('build:css',    gulp.series( scss                                                                 ));
    gulp.task('build:js',     gulp.series( js                                                                   ));
    gulp.task('build:hugo',   gulp.series( clean, 'build', 'hugo_build', `lint`                                 ));
    gulp.task('server:hugo',  gulp.series( 'build',              gulp.parallel( 'hugo_server', watch_scss_js)   ));
    gulp.task('server:bs',    gulp.series( 'build:hugo', server, gulp.parallel( watch_server , watch_scss_js)   ));
  // Logging
    console.log('[Gulpfile] `tasks`       loaded.');
