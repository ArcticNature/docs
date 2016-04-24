+++
date = "2016-04-11T22:39:59+01:00"
force_menu = "ref"
title = "snow-fox-client"

references = ["cli"]
references_weight = 3
+++

The official command line client.
Used to interact with the SnowFox server.
<!--more-->


{{% draft %}}
Server
------
Server connection options.

### `--unix`: connect to the given unix socket.
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default "/tmp/snow-fox.socket" "" %}}
{{% /attributes %}}

Specifies the path to the UNIX socket file to connect to.
{{% /draft %}}


Other
-----
Miscellaneous options.

### `--help`: show available options
Print the list of available options and parameters and exits.

### `--Version`: show version and exit
Print the version of the binary and exits.
