---
type: project
draft: false
date: '2017-01-14'
title: Profile Api
topics:
  - code
tools:
  - node.js
  - express.js
  - cheerio
  - request
  - rest API
link: 'https://api.htko.ca/fcc'
code: 'https://github.com/htko89/fcc-profile-api'
path: code/fcc/profile-api
---
# Personal Project
JSON(P) API for FreeCodeCamp profile and curriculum map. Built with Node, Express, Cheerio, and Request

# Example
An example of this API in use is on the [FreeCodeCamp](http://htko.ca/project/code/fcc/free-code-camp/README/) project page.

## Server Install:
* Do the following in a system with node & npm v6.9.4 :
```
git clone https://github.com/htko89/fcc-profile-api.git
cd fcc-profile-api/release
npm install
node server.js
```

## Server Usage:
* Your installed api server is available at: [http://localhost:80/fcc](http://localhost:80/fcc)
  * **JSONP url**, example: [http://localhost:80/fcc?user=your_username&callback=test](http://localhost:80/fcc?user=your_username&callback=test)
  * **JSON url**, example: [http://localhost:80/fcc?user=your_username](http://localhost:80/fcc?user=your_username)
  * User and callback arguments are optional, example: [http://localhost:80/](http://localhost:80/)
* I also host a server for public use **(be fair!)** at: http://api.htko.ca/fcc
  * **JSONP url**, example: http://api.htko.ca/fcc?user=your_username&callback=
  * **JSON url**, example: http://api.htko.ca/fcc?user=your_username
  * User and callback arguments are optional, example: http://api.htko.ca/fcc
  * HTTPS supported

## Data Structure:
* **HINT**: Don't specify a username to see how the curriculum map is organized. (use a linter)
* Data returned are nested objects: Certification > Chapter > Challenge.
* Older challenges that have been removed from the FreeCodeCamp curriculum is under `Deprecated` key.

### Example shortened output (HTTP code 200).
```json
{
  "Front End Development Certification": {
    "HTML5 and CSS": {
      "_time": "1969-12-31T10:00:00.000Z",
      "Inform with the Paragraph Element" : {
        "_link" : "https://www.freecodecamp.com/challenges/inform-with-the-paragraph-element",
        "_dateC" : "May 21, 2016",
        "_dateU" : "May 22, 2016",
        "_code" : "https://www.freecodecamp.com//challenges/Inform with the Paragraph Element?solution=%0A%3Ch1%3EHello%20World%3C%2Fh1%3E%0A%3Ch2%3ECatPhotoApp%3C%2Fh2%3E%0A%3Cp%3EHello%20Paragraph%3C%2Fp%3E%0A"
      }
    }
  },
  "Data Visualization Certification": {
		"Sass": {
			"_time": "1969-12-31T10:00:00.000Z",
			"Learn Sass Challenges": {
				"_status": "Coming Soon"
			}
		}
  },
  "Coding Interview Preparation": {
		"Coding Interview Training": {
			"_time": "1970-01-03T03:00:00.000Z",
			"_desc": "To qualify for this coding interview training, you must first earn all four certifications: Front End, Data Visualization, Back End, and Full Stack",
			"Soft Skill Training": {},
			"Critical Thinking Training": {},
			"Whiteboard Coding Training": {}
		}
  },
  "Deprecated": {
  	"Add Alt Text to an Image for Accessibility": {
  		"_dateC": "May 21, 2016",
  		"_code": "https://www.freecodecamp.com//challenges/Add Alt Text to an Image for Accessibility?solution=..."
  	}
  }
}
```
### Example error output (HTTP code 500).
```json
{
  "Errors": {
    "_message": "Cannot request freeCodeCamp map",
    "_error": {}
  }
}
```
