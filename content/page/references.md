+++
date = "2016-03-25T16:51:15Z"
title = "Full References"

[menu]
  [menu.nav_right]
    identifier = "ref"
    weight = 0
+++

The full reference pages are for those who want to know all the details.
SnowFox has a few different interfaces, each with its own section here.


Command line references
-----------------------
The [Command Line Reference]({{< relref "references/cli.md" >}}) section
is dedicated to the command line interfaces for the various binaries
that form SnowFox.


Protocol Buffers
----------------
Protocol Buffers [message]({{< relref "references/protobuf.md" >}})
are used in four contexts in SnowFox:

  * [Daemon/Manager]({{< relref "references/protobuf/daemon-manager.md" >}}) protocol.
  * [Daemon/Spawner]({{< relref "references/protobuf/daemon-spawner.md" >}}) protocol.
  * [Manager/Spawner]({{< relref "references/protobuf/manager-spawner.md" >}}) protocol.
{{% draft %}}
  * [Public]({{< relref "references/protobuf/public.md" >}}) protocol.


Internals
---------

  * TODO: process forking model.

{{% /draft %}}
