# Table of Contents
- [Setup](#setup)
  - [Requirements](#requirements)
  - [Installation](#installation)
    - [Database](#database)
    - [PHP](#php)
    - [Setting up](#setting-up)
  - [Environmnent](#environment)
  - [Publishing](#publishing)
- [API](#api)
  - [Headers](#headers)
  - [Data Types](#data-types)
  - [/get_streams](#get_streams)
  - [/getreleases](#getreleases)

# Setup
## Requirements
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [PHP](https://secure.php.net/downloads.php)
- [MariaDB](https://downloads.mariadb.org/)

## Installation
### Database
1. Open HeidiSQL
2. Create a new session
3. File -> Load SQL File
4. Select /onepace/db/db.sql
5. Run (F5)
6. Refresh the view to see onepace database
7. Click on the users icon
8. Add a new user with username onepace_site and password 12345

### PHP
1. Put extracted PHP contents under C:\
2. Remove `php.ini-production`
3. Rename `php.ini-development` to `php.ini`
4. Find `;   extension=mysqli`
5. Remove the semi-colon and save

### Setting up
1. Install the required webpack version: Run `install-webpack.bat`.
2. Install the required node modules: Run `install-nodemodules.bat`.
3. Finally, start the test environment: Run `start.bat`.

# API
## Headers
- Content-Type: application/json
- Accept: application/json
- Charset: utf-8
## Data Types
- i: sint32
- b: bool
- s: string
- ut: unix-time
- .*\?$: nullable
## /get_streams
```
{
    "arcs":
    [
      {
        "id": i,
        "title": s,
        "chapters": s,
        "resolution": s,
        "released": b,
        "episodes": s,
        "magnet": s,
        "torrent": s
      }
    ],
    "episodes":
    [
      {
        "id": i,
        "crc32": s,
        "resolution": s,
        "title": s,
        "chapters": s,
        "episodes": s,
        "stream_id": s,
        "isReleased": b,
        "status": s,
        "part": i?,
        "arcId": i?
      }
    ]
}
```
## /getreleases
```
{
    "releases":
    [
      {
        "crc32": s,
        "name": s,
        "magnet": s,
        "torrent": s,
        "createddate": ut?,
        "ageDays": i
      }
    ]
}
```
## /list_progress_episodes
```
{
	"arcs":[
		{
			"id":i,
			"title":s,
			"chapters":s
		},
		...
	],
	"episodes":[
		{
			"id":i,
			"arc_id":i,
			"part":i,
			"title":s,
			"chapters":s,
			"released_date":s
		},
		...
	],
	"issues":[
		{
			"id":i,
			"episode_id":i,
			"description":s,
			"status":i,
			"createdby":s,
			"createddate":ut
		}
	]
}
```
## /create_episode
### Request (GET)
```
{
	"token":s,
	"arc_id":i,
	"title":s,
	"part":i,
	"released_date":s,
	"torrent_hash":s,
	"episodes":s,
	"chapters":s,
	"resolution":s
}
```
### Response
See /list_progress_episodes
## /update_episode
### Request (GET)
```
{
	"token":s,
	"id":i,
	"arc_id":i,
	"title":s,
	"part":i,
	"released_date":s,
	"torrent_hash":s,
	"episodes":s,
	"chapters":s,
	"resolution":s
}
```
### Response
See /list_progress_episodes
## /delete_episode
### Request (GET)
```
{
	"token":s,
	"id":i
}
```
### Response
See /list_progress_episodes
## /create_issue
### Request (GET)
```
{
	"token":s,
	"id":i
}
```
### Response
```
{
	"arcs":[
		{
			"id":i,
			"title":s,
			"chapters":s
		},
		...
	],
	"episodes":[
		{
			"id":i,
			"arc_id":i,
			"part":i,
			"title":s,
			"chapters":s,
			"released_date":s
		},
		...
	]
}
```
## /update_issue
## /close_issue
## /open_issue
