
<!-- TITLE/ -->

# File System plugin for [ChainyJS](http://chainyjs.org)

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/chainy-plugins/chainy-plugin-fs.png?branch=master)](http://travis-ci.org/chainy-plugins/chainy-plugin-fs "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/chainy-plugin-fs.png)](https://npmjs.org/package/chainy-plugin-fs "View this project on NPM")
[![Dependency Status](https://david-dm.org/chainy-plugins/fs.png?theme=shields.io)](https://david-dm.org/chainy-plugins/fs)
[![Development Dependency Status](https://david-dm.org/chainy-plugins/fs/dev-status.png?theme=shields.io)](https://david-dm.org/chainy-plugins/fs#info=devDependencies)<br/>


<!-- /BADGES -->


<!-- CHAINY_DOCUMENTATION/ -->

<!-- DESCRIPTION/ -->

Chainy custom plugin that adds the fs utility methods as chainy actions.

<!-- /DESCRIPTION -->


``` javascript
require('chainy').create().require("fs log")Chainy.create()
	// Write method 1
	.set({a:1}).writeTo(path)

	// Write method 2
	.set(path).writeFile(path)

	// Check write worked
	.set(path).exists().log()  // true

	// Check write data worked
	.set(path).readFile().log()  // {a:1}

	// Delete
	.set(path).unlink()

	// Check delete worked
	.set(path).exists().log()  // false
```


<!-- /CHAINY_DOCUMENTATION -->


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('chainy-plugin-fs')`
- Install: `npm install --save chainy-plugin-fs`

<!-- /INSTALL -->


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/chainy-plugins/chainy-plugin-fs/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/chainy-plugins/chainy-plugin-fs/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?



### Contributors

No contributors yet! Will you be the first?
[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/chainy-plugins/chainy-plugin-fs/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2014+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

<!-- /LICENSE -->


