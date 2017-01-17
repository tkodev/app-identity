---
type: "project"
draft: false
date: "2016-11-15"
title: "Scripts Bash"
parent: "personal"
topics:
  - "code"
tools:
  - "bash"
  - "docker"
cover: "cover.jpg"
photo:
  - "cover.jpg"
code: "https://github.com/htko89/scripts-linux"
---
# Personal Project
A collection of [BASH](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) scripts used to administrate local server.

## Install
* These bash scripts are mostly designed to run in a Linux environment, specifically Docker 1.10+ running on Ubuntu 16.04.1.
* Extract [latest version](https://github.com/htko89/Linux-Scripts/releases) into a directory, say `~/Linux-Scripts`, and enter it.
```
cd ~/Linux-Scripts
```
* Set executable permissions:
```
chmod 755 -R ~/Linux-Scripts
```
* `~/Linux-Scripts` should contain `apps`, `contents` folders and a `launch.sh` file.

## Usage / Changelog

### 0.1
* Usage:
```
Application Comments: [required] <optional>"
Usage   : ./cmd.sh [appType] [app] [profile] <commands..>"
Example : ./cmd.sh docker samba local"
SUDO access is required for docker file permissions."
Available app types are:
docker, system
```
* Example:
```
cd ~/Linux-Scripts
./launch.sh docker samba local
```
* Apps that have support files created in `contents` folder. (such as a web server's html files)
