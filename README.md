# Personal Project
**No paid templates, no third party designs, 100% designed and built by me.**

This is the code base for my website at HTKO.ca. Complete rewrite version 3.

Full responsive. Using a heavily modified version of [Bulma](http://bulma.io/) to define grid structure; it is CSS only, unopinionated, fast **(&lt;200KB!)**, yet supports all modern flexbox grid conventions. My **Gulp** build process then compiles **SASS & SCSS**, copies portfolio items from my local sources, builds it with **Hexo**, and renders real-time with **BrowserSync** for a live editing experience. I deploy using **Wercker** and **Git** on **DigitalOcean** due to delta updates for all file types, which means **builds deploy in seconds not hours.**

![App Screenshot](https://raw.githubusercontent.com/htkoca/htko-site/master/assets/mockup-desktop-xl.jpg)

## Building for developers
* Download and install dependencies
```
npm install hexo-cli -g
git clone https://github.com/htkoca/htko-site-base.git
cd htko-site-base/sources
npm install
cd ../scripts
npm install
```
* Build
```
npm run copy  # copy files from project folder defined in `scripts/config/config.yml`
npm run build # live build
```

## Project Criteria:
* 100% HTKO design.
  * `Gulp`, `Node.js` task engine.
* Style Structure: Custom lightweight base based on [Bulma](http://bulma.io/).
  * `Gulp-Sass`,`Gulp-PostCSS`,`AutoPrefixer` to compile sass & scss files to css.
* Portfolio Support: Pull from all local sources.
  * `JS-Yaml`, `Gray-Matter` for front matter / build configuration processing.
  * `Globby`,`Minimatch`,`FS-Extra` for portfolio projects compilation.
* Human ready: Linting, Sourcemapping, Live-editing.
  * `JS-beautify` for linting.
  * `Hexo`, `BrowserSync` for building and rendering.
