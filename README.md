<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://i.imgur.com/9hvPtsv.png">
  </a>
  <br>
  <br>

![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/emernet-eins/system?include_prereleases)

![Supported Platforms](https://img.shields.io/badge/platform-LINUX-blue)
![GitHub last commit](https://img.shields.io/github/last-commit/emernet-eins/system)
![Java Version](https://img.shields.io/badge/build-passing-brightgreen)
![Java Version](https://img.shields.io/badge/PRs-welcome-brightgreen)

  <br>

  ![GitHub All Releases](https://img.shields.io/github/downloads/emernet-eins/system/total)
  ![GitHub closed issues](https://img.shields.io/github/issues-closed/emernet-eins/system)
  ![GitHub issues](https://img.shields.io/github/issues/emernet-eins/system)
  
  <h1>EMERNET E.I.N.S - system</h1>
  <p>
    EMERNET E.I.N.S (Emergency Information Network System) was created to provide important information in case of a complete communication network failure.
    EMERNET provides information like important Telephone numbers, emergency news applications (ex. NINA) and emergency services (ex. shelter locations).
    All information provided is managed by the Open Source Community on GitHub and EMERNET-EINS.org.
    EMERNET is frequently updated to provide the latest information.

This repository hosts the frontend for EMERNET. It holds emergency numbers for different countries across the whole world.
  </p>
</div>

## Table of Contents

1. [Installation](#install)
1. [Updating](#updating)
2. [Introduction](#introduction)
3. [Concepts](#concepts)
4. [Contributing](#contributing)
5. [Support](#support)
6. [Core Team](#core-team)
7. [Sponsoring](#sponsoring)
8. [Special Thanks](#special-thanks-to)

<h2 align="center" id="install">Install</h2>

### Installing EMERNET System

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



<h2 align="center" id="updating">Updating</h2>

If you installed EMERNET via the installer, it should automatically update itself if you didn't terminate the .jar file. If you did or want to trigger the update by yourself, simply run <a href="https://github.com/emernet-eins/server/releases/">emernet_runtime_version.jar</a> again.

If you installed EMERNET by hand, you can simply download the latest <a href="https://github.com/emernet-eins/system/releases">release</a> and override it with the contents of your webserver.

<h2 align="center" id="introduction">Introduction</h2>

As mentioned above, EMERNET E.I.N.S is a system that provides emergency information in case of an emergency.

**What is being provided?**

* Important numbers for multiple countries
* Automatically updated files
* Direct call links

### Browser Compatibility

EMERNET E.I.N.S works in pretty much every browser. Even mobile browsers are able to use the links provided.

<h2 align="center" id="concepts">Concepts</h2>

### Intent and purpose

We created this project to provide the really important information everybody could need in an emergency. We know that there are enough other ways to get to his information, but we are planning big for this project.

### Future

We are planning to extend this project into a raspberry Pi only version, that even installs everything required for a WiFi hotspot, so everybody can access the information by just connecting to the open WiFi.

### Monetization

We are not really planning to monetize this project. The information provided is free to be viewed to everybody. However, if you would like to buy us a coffee, feel free to do so.


<h2 align="center" id="contributing">Contributing</h2>

**We want contributing to EMERNET E.I.N.S to be fun, enjoyable, and educational for anyone, and everyone.** Due to our project being split into multiple parts, there is more than one repository on our organization. However, feel free to take part in developing every single one of them if you'd like to.

Contributions are highly apreaciated! If you want to add / change / delete something, have a look at <a href="https://github.com/emernet-eins/system/blob/master/CONTRIBUTING.md">our contributing.md</a>.

Contributions go far beyond pull requests and commits. Although we love giving you the opportunity to put your stamp on EMERNET, we also are thrilled to receive a variety of other contributions including:

* Documentation updates, enhancements, designs, or bugfixes
* Spelling or grammar fixes
* README.md corrections or redesigns
* Adding features
* Triaging GitHub issues -- especially determining whether an issue still persists or is reproducible.
* Spreading the word about EMERNET and helping someone else who needs help
* Teaching others how to contribute to our repos!
* Blogging, speaking about, or creating tutorials about EMERNET E.I.N.S.

If you are worried or don't know where to start, you can **always** reach out to us by simply submitting an issue and a maintainer can help give you guidance!

_Looking to speak about EMERNET?_ We'd **love** to review your talk abstract/CFP! You can email it to emernet@rustige.me and we can give pointers or tips!!!

<h3 align="center" id="flavour">Creating your own flavours of EMERNET</h3>

If you'd like to have a different color, or just something else that does not meet your likings, feel free to do so and fork the repository.

<h2 align="center" id="support">Support</h2>

If you have discovered a 🐜 or have a feature suggestion, feel free to create an issue on Github.

### License

This project is lincensed under the MIT License.

<h2 align="center" id="team">Core Team</h2>

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://avatars0.githubusercontent.com/u/52698477?s=460">
        <br>
        <a href="https://github.com/miit0o">Christoph</a>
        <p>EMERNET Backend</p>
        <br>
        <p>Founder</p>
      </td>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://avatars0.githubusercontent.com/u/33719652?s=460">
        <br>
        <a href="https://github.com/CodeF0x">CodeF0x</a>
        <p>EMERNET Frontend</p>
        <br>
        <p>Developer</p>
      </td>
    </tr>
  </tbody>
</table>

<h2 align="center" id="sponsoring">Sponsoring</h2>

Most of the core team members, EMERNET contributors and contributors in the ecosystem do this open source work in their free time. If you use EMERNET for a serious task, and you'd like us to invest more time on it, please donate. This project increases your income/productivity too. It makes development and applications faster and it reduces the required bandwidth.

This is how we use the donations:

* Allow the core team to work on EMERNET
* Thank contributors if they invested a large amount of time in contributing
* Support projects in the ecosystem that are of great value for users
* Support projects that are voted most (work in progress)
* Infrastructure cost
* Fees for money handling

<h2 align="center" id="specialthanks">Special Thanks to</h2>
<p align="center">(In chronological order)</p>

* @google for [Material.io](http://material.io/), which provides our (beautiful) design
* Everyone who has helped making EMERNET what it is today
* Everyone I forgot to mention here, but also influenced EMERNET.
