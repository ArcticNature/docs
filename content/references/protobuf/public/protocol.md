+++
date = "2016-04-01T23:28:11+01:00"
force_menu = "ref"
title = "Public Protocol Reference"

+++


Client connection
-----------------
These events are exchanged when a client connects to the daemon.
The sequence is initiated by the client.

  * The client sends a
    [`Message`]({{< relref "references/protobuf/messages.md#message" >}})
    with `Code::Introduce` to the daemon.
  * The daemon responds with a
    [`ClientIntroduce`]({{< relref "references/protobuf/public/messages.md#clientintroduce" >}})
    response.
  * The client should use the returned ID to build `correlation_id`s for its messages.


Node information
----------------
These events are exchanged when node information is requested.
The sequence is initiated by the client.

  * The user sends a
    [`NodeInfoRequest`]({{< relref "references/protobuf/public/messages.md#nodeinforequest" >}})
    message to the Manager.
  * The Manager sends a
    [`NodeInfoResponse`]({{< relref "references/protobuf/public/messages.md#nodeinforesponse" >}})
    message back.
