+++
categories = ["general"]
date = "2015-10-26T20:03:56+01:00"
tags = ["document"]
title = "Compile sources"

+++

SnowFox sources are available on github: https://github.com/stefano-pogliani/snow-fox
The configuration and compilation process is automated using grunt.js so
all you need is the compile time dependencies and the sources themselves.


Compile time dependencies
-------------------------
  * GCC with support for C++11.
  * Google protocol buffers compiler and C++ headers.
  * grunt-cli
  * Lua 5.2 development headers.
  * npm

Additional required Node.JS modules are listed in: `package.json`


Compile SnowFox
---------------
This assumes that the above mentioned dependencies are installed.

    git clone git:@github.com:stefano-pogliani/snow-fox
    cd snow-fox
    npm install
    grunt release

The outputs are placed in the `out/dist/release` directory.

Other targets are available:
  * `debug`: will build the debug version of SnowFox.
  * `test`: will build the tests for SowFox.
  * `analyse`: will build the tests and execute them.
               It will also execute static analysis of the code.
