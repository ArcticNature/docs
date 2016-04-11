+++
date = "2016-03-28T11:12:06+01:00"
title = "snow-fox"

references = ["cli"]
references_weight = 0

force_menu = "ref"
+++

The SnowFox daemon binary.
Responsible for orchestrating the execution of the manager and the spawner.
<!--more-->


Daemon options
--------------
These options tweak the daemonisation process.


### `--daemonise`: run SnowFox in daemon mode
{{% attributes %}}
{{% attribute Type Boolean "" %}}
{{% attribute Default true "" %}}
{{% /attributes %}}

When run in daemon mode, `snow-fox` detaches itself from the parent process.
It then starts the `snow-fox-spawner` with root privileges, drops them, and
starts the `snow-fox-manager` process.

You can use `--group` and `--user` options to change the group/user
to drop to.


### `--drop_privileges`: drop privileges when not in daemon mode
{{% attributes %}}
{{% attribute Type Boolean "" %}}
{{% attribute Default false "" %}}
{{% /attributes %}}

When run outside daemon mode, `snow-fox` starts the `snow-fox-spawner` and
`snow-fox-manager` with the same group/user that started the process, which needs to be root.

Because this is a security risk, `--drop_privileges` can be specified to still
drop group and user privileges even without daemonising the process.


### `--group`: group to drop privileges to
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default snow-fox "" %}}
{{% /attributes %}}

When run in daemon mode, or when `--drop_privileges` is specified,
the effective group is set to this option.


### `--user`: user to drop privileges to
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default snow-fox "" %}}
{{% /attributes %}}

When run in daemon mode, or when `--drop_privileges` is specified,
the effective user is set to this option.


Cluster options
---------------
### `--node_name`: unique name of the node
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default node "" %}}
{{% /attributes %}}

Used to set the name for the node.
Names must be unique within the cluster.


I/O options
-----------
Customise the processes Input/Output.


### `--stderr`: redirect standard error to file
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default "" "" %}}
{{% /attributes %}}

When the specified value is not the empty string, the standard error
of the SnowFox processes is redirected to the file at this path.


### `--stdin`: redirect standard input from file
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default "" "" %}}
{{% /attributes %}}

When the specified value is not the empty string, the standard input
of the SnowFox processes is read from the file at this path.


### `--stdout`: redirect standard output to file
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default "" "" %}}
{{% /attributes %}}

When the specified value is not the empty string, the standard output
of the SnowFox processes is redirected to the file at this path.


### `--work_dir`: set the working directory.
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default "." "" %}}
{{% /attributes %}}

Set the given path as the process working directory.


Repository options
------------------
Configuration repository related options.


### `--repo_path`: path to the configuration repository
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default None "This option is **required**" %}}
{{% /attributes %}}

Location on the file system of the configuration repository.

This option is forwarded to the Manager.


### `--repo_type`: type of configuration repository
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default git "" %}}
{{% /attributes %}}

Type of version control system repository where the configuration is stored.
The only supported type of repository is `git`.

This option is forwarded to the Manager.


### `--repo_ver`: version of the configuration to use
{{% attributes %}}
{{% attribute Type String "" %}}
{{% attribute Default git "" %}}
{{% /attributes %}}

The identifier of the configuration version to use.
It may be a logical name (such as `master`) or an actual version
(a commit hash).

This option is forwarded to the Manager.


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

This option is forwarded from the `daemon` to both `manager` and `spawner`.


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
