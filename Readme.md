SnowFox Documentation
=====================
SnowFox is a service managment tool build as a collection of components.
This components are divided into multiple repositoreis.
This there is a [primary repository](https://github.com/ArcticNature/snow-fox)
which submodules all the components.

This is the documentation repository.
It contains all the documentaion for the full system reguardles of which
component(s) implement it and where those components are.

This file is not part of the documentaion but is usefull to understand
how things are organised.


Repository list
---------------
Main repository: https://github.com/ArcticNature/snow-fox
Check this one out and checkout the Readme.md for a quick developer's guide.

  * Build Tools: https://github.com/ArcticNature/build-tools
  * Core: https://github.com/ArcticNature/core
  * Dependences: https://github.com/ArcticNature/dependencies
  * Documentation: https://github.com/ArcticNature/docs
  * Official extensions: https://github.com/ArcticNature/extentions


Build dependencies
------------------
The documentation is build with [Hugo](http://gohugo.io/).
Additional tools are also used for thinges like CSS styles,
JavaScript, ecc ...
The following is a list of tools that this component needs:

  * Hugo (v0.15).
  * Less (v?).

In order to build it, **from the main repository** and with it installed:
```bash
grunt release:docs
```
