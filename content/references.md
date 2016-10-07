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


LUA interfaces
--------------
LUA is used different contexts across SnowFox:

  * The [LUA client API]({{< relref "references/lua/client.md" >}}) is
    what the user calls to run commands in the `snow-fox-client`.
  * The [Node configuration]({{< relref "references/lua/node-config.md" >}})
    is the LUA interface to a SnowFox node's configuration.


Protocol Buffers
----------------
Protocol Buffers [messages]({{< relref "references/protobuf/messages.md" >}})
are used in SnowFox to communicate among components,
with clients, and with other nodes.  
These messages are exhanged among systems to form an asynchronous client-server
[communication protocols]({{< relref "references/protobuf/protocols.md" >}}).

These components have protocol buffer based APIs:

  * Daemon and Manager
    [messages]({{< relref "references/protobuf/dm/messages.md" >}})
    are exchanged according to the
    [dm protocol]({{< relref "references/protobuf/dm/protocol.md" >}}).
  * Daemon and Spawner
    [messages]({{< relref "references/protobuf/ds/messages.md" >}})
    are exchanged according to the
    [ds protocol]({{< relref "references/protobuf/ds/protocol.md" >}}).
  * Manager and Spawner
    [messages]({{< relref "references/protobuf/ms/messages.md" >}})
    are exchanged according to the
    [ms protocol]({{< relref "references/protobuf/ms/protocol.md" >}}).
  * SnowFox public API
    [messages]({{< relref "references/protobuf/public/messages.md" >}})
    are exchanged according to the
    [public protocol]({{< relref "references/protobuf/public/protocol.md" >}}).

Lifecycles
----------
Lifecycles are used to provide flexibility to SnowFox.
A lifecycle is a well defined sequence of events, with optional parameters,
which are triggered by parts of the system as it evolves.

An example is the `process` lifecycle, which is a sequence of events
that follows the lifetime of the SnowFox process.

Checkout the
[details and full list]({{< relref "references/lifecycles.md" >}})
of lifecycles to learn more about them.


Advanced topics
---------------

  * [Representing status]({{< relref "references/advanced/status.md" >}}) of system and units alike.
  * [Event based system]({{< relref "references/advanced/events.md" >}}): event interface and the run loop.
  {{% draft %}}* TODO: process forking model.{{% /draft %}}
