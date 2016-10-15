+++
date = "2016-03-25T16:51:15Z"
title = "Full References"

[menu]
  [menu.nav_right]
    parent = "ref"
    weight = -1
+++

The full reference pages are for those who want to know all the details.
SnowFox has a few different interfaces, each with its own section here.


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
