---
type: project
draft: false
date: '2017-01-19'
title: Site Base
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
  - screenshot-ipadpro-landscape.jpg
  - mockup-surface.jpg
path: code/htko/site-base
---
# Personal Project
Hugo base for personal portfolio at htko.ca. An experiment in static site generation, using [hugo](http://gohugo.io/) as the engine. Dynamic sites are heavy in resource usage are vulnerable to attacks. Static sites are fast, efficient and most of all, provide minimal avenues of attack. However, they are difficult to maintain, and do not scale well with large sets of data.

I have selected **[Bulma]**(http://bulma.io/) as my css framework of choice as it is CSS only, unopinionated, fast **(&lt;200KB!)**, yet supports all modern flexbox grid conventions. I also created a mini CSS framework of my own, to supplement Bulma. My build process builds the css, pulls from my local portfolio directory the needed projects, then builds it with hugo, and renders it with **BrowserSync**. I deploy using **Git** on **DigitalOcean** because it does delta updates, which is especially important when dealing with hugo's large output.

## Project Criteria:
* `gulp`, `node` task engine
* `js-yaml`, `gray-matter` for front matter / build configuration processing.
* `gulp-sass`,`gulp-postcss`,`autoprefixer` to compile sass & scss files to css.
* `globby`,`minimatch`,`fs-extra` for portfolio projects compilation.
* `js-beautify` for linting.
* `hugo`, `browser-sync` for building and rendering.
