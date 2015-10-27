+++
categories = ["general"]
date = "2015-10-26T19:52:00+01:00"
title = "Install"

+++

Installation process
====================
SnowFox can be installed from sources.
These are available at https://github.com/stefano-pogliani/snow-fox
Follow the steps explained in the [compilation steps](../development/compile)
page of the development pages.


Daemon install
--------------
Once the sources have been compiled the daemon is ready for use as a
standalone binary.
For conveninece we can copy this binary to a system wide location
such as `/opt/snow-fox/bin`:

```bash
mkdir -p /opt/snow-fox/bin
cp out/dist/release/daemon/daemon /opt/snow-fox/bin/snow-fox
```

### Runtime requirements
As of now SnowFox needs a few extra libraries to be available in the system:

  * Google Flags.
  * Lua 5.2 runtime.
  * Pthreads (POSIX threads).


JSON API
--------
The JSON API is provided by a node.js module that wraps the protocol buffers.
When the sources are compiled the module is build in
`out/dist/release/clients/json/module`.
The following commands can be used to make the module available
in the location expected by the default configuration repository:

```bash
# copy the module to a system wide location.
mkdir -p /opt/snow-fox/clients/json
cp -rp out/dist/release/clients/json/module /opt/snow-fox/clients/json

# Install NPM dependencies.
cd /opt/snow-fox/clients/json
npm install
```
