Compiling the sources
=====================
As mention in the [Project Overview](main.md) SnowFox is a software
formed of different projects built with different technologies.


Getting the code
----------------
The official code is available as a git repository hosted on
[GitHub](https://github.com/stefano-pogliani/snow-fox).
Fetch the project by running:

    git clone git:@github.com:stefano-pogliani/snow-fox


Run-time dependencies
---------------------
The following framework and libraries are required to run the services:

  * Lua 5.2 runtime.
  * Node.JS

Additional required Node.JS modules are listed in:

  * json-api/package.json


Compile-time dependencies
-------------------------

  * GCC with support for C++11.
  * grunt-cli
  * Lua 5.2 development headers.
  * npm

Additional required Node.JS modules are listed in:

  * package.json


Running tasks
-------------
For people familiar with [Grunt](http://gruntjs.com/) this section is
redundant but in case you are not familiar with the tool it is a
JavaScript task runner.
Grunt is used to simplify the process of running command to compile
code or generate other resources, such as documentations.
Many people used to C/C++ projects will see the similarity with make files.

The git repository comes with a top level Grunt file that collects tasks to
compile all the services that compose SnowFox.

To see all the available tasks you can run `grunt --help`.
To compile the projects in release mode simply run `grunt`.
You can run `grunt debug` to compile the debug version of the projects.

After the project is compiled you can proceed to the
[first steps](first-steps.md).


Quick reference
---------------

    git clone git:@github.com:stefano-pogliani/snow-fox
    cd snow-fox
    npm install
    grunt debug
