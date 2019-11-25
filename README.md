# EMERNET E.I.N.S

EMERNET E.I.N.S (Emergency Information Network System) was created to provide important information in case of a complete communication network failure.<br>
EMERNET provides information like important Telephone numbers, emergency news applications (ex. NINA) and emergency services (ex. shelter locations).<br>
All information provided is managed by the Open Source Community on GitHub and EMERNET-EINS.org.<br>
EMERNET is frequently updated to provide the latest information.

## EMERNET System

This repository hosts the frontend for EMERNET. It holds emergency numbers for different countries across the whole world.

# Installation

If you want to host your own instance of emernet, you have two options:

- run the installer provided <a href="https://github.com/emernet-eins/server/releases">here</a>. This will
  - install Apache2
  - install unzip
  - **remove Apache's 000-default.conf file, and replace it with emernet.conf**
  - download this repository and move it to `/var/www/emernet/`
  - set owner rights of `/var/www/emernet/` to www-data:www-data

or

- download and install EMERNET yourself:
  - download this repository to your webserver and place it in its respective document root directory
  - create a virtual host file
  - configure emernet to be reachable (<a href="https://github.com/emernet-eins/server/blob/master/emernet.conf">example Apache2 config</a>)

If you don't have any webserver installed, option one is recommended. If you already have a webserver installed, maybe also configured it, option two is what you want.

# Updating

If you installed EMERNET via the installer, it should automatically upate itself if you didn't terminate the .jar file. If you did or want to trigger the update by yourself, simply run <a href="https://github.com/emernet-eins/server/releases/">emernet_runtime_version.jar</a> again.

If you installed EMERNET by hand, you can simply download the latest <a href="https://github.com/emernet-eins/system/releases">release</a> and override it with the contents of your webserver.

# Contributing

Contributions are highly apreaciated! If you want to add / change / delete something, have a look at <a href="https://github.com/emernet-eins/system/blob/master/CONTRIBUTING.md">our contributing.md</a>.

# Code of Conduct

Before you contribute, please have a look at <a href="https://github.com/emernet-eins/system/blob/master/CODE_OF_CONDUCT.md">our Code of Conduct</a>.
