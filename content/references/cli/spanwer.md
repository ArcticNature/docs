+++
date = "2016-03-28T23:47:42+01:00"
title = "snow-fox-spawner"

force_menu = "ref"
references = ["cli"]
references_weight = 2

+++

The SnowFox manager binary.
Priviledged unit of SnowFox, deals with operations that require root.  
**`snow-fox-spawner` should not be called directly, let the daemon do it!**
<!--more-->


Inter-Process communication
---------------------------
Configure how `daemon`, `manager`, and `spawner` talk to each other.


### `--spawner_manager_socket`: socket file to connect manager and spawner
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default "/var/run/snow-fox-manager-spawner.socket" "" %}}
{{% /attributes %}}

Manager and Spawner use UNIX sockets to exchange protocol buffer messages.
The path to the UNIX socket can be specified with this option.


### `--spawner_socket`: socket file to connect daemon and spawner
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default "/var/run/snow-fox-spawner.socket" "" %}}
{{% /attributes %}}

Daemon and Spawner use UNIX sockets to exchange protocol buffer messages.
The path to the UNIX socket can be specified with this option.


Other
-----
Miscellaneous options.


### `--help`: show available options
Print the list of available options and parameters and exits.

### `--Version`: show version and exit
Print the version of the binary and exits.
