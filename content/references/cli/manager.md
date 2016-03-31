+++
date = "2016-03-28T20:25:30+01:00"
title = "snow-fox-manager"

references = ["cli"]
references_weight = 1

force_menu = "ref"
+++

The SnowFox manager binary.
Logic unit of SnowFox, deals with user requests and system events.
<!--more-->


Repository options
------------------
Configuration repository related options.


### `--repo_path`: path to the configuration repository
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default None "This option is **required**" %}}
{{% /attributes %}}

Location on the file system of the configuration repository.


### `--repo_type`: type of configuration repository
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default git "" %}}
{{% /attributes %}}

Type of version control system repository where the configuration is stored.
The only supported type of repository is `git`.


### `--repo_ver`: version of the configuration to use
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default git "" %}}
{{% /attributes %}}

The identifier of the configuration version to use.
It may be a logical name (such as `master`) or an actual version
(a commit hash).


Inter-Process communication
---------------------------
Configure how `daemon`, `manager`, and `spawner` talk to each other.


### `--manager_socket`: socket file to connect daemon and manager
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default "/var/run/snow-fox-manager.socket" "" %}}
{{% /attributes %}}

Daemon and Manager use UNIX sockets to exchange protocol buffer messages.
The path to the UNIX socket can be specified with this option.


### `--spawner_manager_socket`: socket file to connect manager and spawner
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default "/var/run/snow-fox-manager-spawner.socket" "" %}}
{{% /attributes %}}

Manager and Spawner use UNIX sockets to exchange protocol buffer messages.
The path to the UNIX socket can be specified with this option.


Other
-----
Miscellaneous options.


### `--help`: show available options
Print the list of available options and parameters and exits.
