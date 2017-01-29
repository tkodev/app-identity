---
type: project
draft: false
date: '2017-01-25'
title: HTKO.ca Site Base V2
topics:
  - code
  - gfx
tools:
  - hugo
  - node
  - gulp
  - sass
  - bulma
link: 'http://www.htko.ca'
code: 'https://github.com/htko89/htko-site-base'
photos:
  - mockup-desktop.jpg
  - screenshot-6+.jpg
  - screenshot-ipadpro-landscape.jpg
  - screenshot-ipadpro.jpg
path: code/htko/site-base-v2
---
# Personal Project
**No paid templates, no third party designs, 100% designed and built by me.**

This is the code base for my website at HTKO.ca.

Using a heavily modified version of [Bulma](http://bulma.io/) to define grid structure; it is CSS only, unopinionated, fast **(&lt;200KB!)**, yet supports all modern flexbox grid conventions. My **Gulp** build process then compiles **SASS & SCSS**, copies portfolio items from my local sources, builds it with **Hugo**, and renders real-time with **BrowserSync** for a live editing experience. I deploy using **Git** on **DigitalOcean** due to delta updates for all file types, which means **builds deploy in seconds not hours.**

## Building for developers
* Download and install dependencies
```
git clone https://github.com/htko89/htko-site-base.git
cd htko-site-base
npm install
```
* Build
```
npm run server # local live editing
npm run builder # remote live build (!)
```
* (!) renders only for build confirmation. All linked elements point to htko.ca and load accordingly based on files there.

## Project Criteria:
* 100% HTKO design.
  * `Gulp`, `Node.js` task engine.
* Style Structure: Custom lightweight base based on [Bulma](http://bulma.io/).
  * `Gulp-Sass`,`Gulp-PostCSS`,`AutoPrefixer` to compile sass & scss files to css.
* Portfolio Support: Pull from all local sources.
  * `JS-Yaml`, `Gray-Matter` for front matter / build configuration processing.
  * `Globby`,`Minimatch`,`FS-Extra` for portfolio projects compilation.
* Human ready: Linting, Sourcemapping, Live-editing.
  * `js-beautify` for linting.
  * `hugo`, `browser-sync` for building and rendering.
