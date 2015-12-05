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
Once the sources are compiled with `grunt distribute`, the daemon is
pakaged in `out/snow-fox-<commit>.tar.gz` under `snow-fox/bin/snow-fox`.

For conveninece we install SnowFox to a system wide location such as
`/opt/snow-fox`:
```bash
tar --extract --directory /opt --file out/snow-fox-<commit>.tar.gz
```

### Runtime requirements
As of now SnowFox needs a few extra libraries to be available in the system:

  * Google Flags.
  * Lua 5.2 runtime.
  * Pthreads (POSIX threads).

The following libraries are required for gitlb2:

  * LibCurl
  * LibSSH2
  * HTTP Parser
  * OpenSSL


JSON API
--------
The JSON API is provided by a node.js module that translate to the
protocol buffers API.
When the sources are compiled with `grunt distribute`, the module is packaged
in `out/snow-fox-<commit>.tar.gz` under `snow-fox/clients/json`.

The following commands can be used to make the module available
in the location expected by the default configuration repository:
```bash
# Copy the module to a system wide location.
tar --extract --directory /opt --file out/snow-fox-<commit>.tar.gz

# Install NPM dependencies.
cd /opt/snow-fox/clients/json
npm install
```
