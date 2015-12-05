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
The following compilers/tools must be installed:

  * GCC with support for C++11.
  * Google protocol buffers compiler and C++ headers.
  * grunt-cli
  * npm

The following libraries are needed:

  * Lua 5.2 and development headers.
  * Google Flags and development headers.

The following libraries are needed by the git repository component:

  * LibCurl and development headers.
  * LibSSH2 and development headers.
  * HTTP Parser and development headers.
  * OpenSSL and development headers.

Additional required Node.JS modules are listed in `package.json`


Compile SnowFox
---------------
This assumes that the above mentioned dependencies are installed.

    git clone git:@github.com:stefano-pogliani/snow-fox
    cd snow-fox
    npm install
    grunt distribute

The above will compile the release version of SnowFox and its packages.
The outputs are placed in the `out/snow-fox-<commit>.tar.gz` directory.

Other targets are available:

  * `release`: will build the release version of SnowFox.
  * `debug`: will build the debug version of SnowFox.
  * `test`: will build the tests for SowFox.
  * `analyse`: will build the tests and execute them.
               It will also execute static analysis of the code.
