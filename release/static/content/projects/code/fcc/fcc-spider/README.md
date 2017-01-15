---
type: "folio"
draft: false
date: "2016-11-24"
title: "FCC Spider"
parent: "fcc"
topics:
  - "code"
tools:
  - "scrapy"
  - "python"
  - "json"
  - "markdown"
cover: "cover.jpg"
photo:
  - "cover.jpg"
code: "https://github.com/htko89/fcc-spider"
version: "0.4.1"
---
# Personal Project
Built on [Scrapy](https://scrapy.org/) & [Python](https://www.python.org/), this tool converts your Free Code Camp challenge profile into JSON data

## Project Install:
* These bash scripts are mostly designed to run in a Linux environment, specifically Python 3 container in Docker 1.10+ running on Ubuntu 16.04.1. Scrapy is yet to support Python 3 in Windows.
* Install Python 3, Scrapy's dependencies and Scrapy itself.
```
apt-get update
apt-get install python-pip build-essential libssl-dev libffi-dev python-dev
pip install cryptography scrapy
```
* Extract [latest version](https://github.com/htko89/FCC-Spider/releases) into a directory, say `~/fccSpider`, and enter it.
* Set executable permissions:
```
cd ~/fccSpider
chmod 755 -R ~/fccSpider
```

## Project Usage:
* Usage:
```
+ Application Comments:
+  Usage    : ./fccSpider.sh [username] [action]
+  Example  : ./fccSpider.sh htko89 full
+  Actions  : See below.
++  full    - Download FCC curriculum map & challenge descriptions, personal profile, export results
++  map     - Download FCC curriculum map & challenge descriptions.
++  profile - Download & export personal profile. Map must be downloaded or error will occur.
++  empty   - Download & export empty profile. Map must be downloaded or error will occur.
++  clear   - Deletes all maps and exports.
```
* Working data output to `/common`. Export data output to `/export`.
* Challenge solution code in URL encoding. Decoder: [Here](http://meyerweb.com/eric/tools/dencoder/).
