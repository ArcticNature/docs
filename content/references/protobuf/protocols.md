+++
date = "2016-04-01T23:17:42+01:00"
force_menu = "ref"
title = "ProtoBuf Protocols"

+++

Messages exchanged through protocol buffers have the format described in the
[messages]({{< relref "references/protobuf/messages.md" >}}) section.
But knowing what to exchange is not as useful without knowing 
when to exchange it and what to expect as a response.

These pages describe the sequence of messages that are exchanged
and the responses to expect as a result of a request.


Common elements
---------------
All messages have `correlation_id` which is used to identify the
sequence of messages that are exchanged in the context of a
request (what is the end goal of these messages?).
When an event is generated a `correlation_id` is attached to it
(and generated if not given through the `Message`).

Any message sent to other system components or back to the client
have the same `correlation_id` but all requests have a unique
`correlation_id` so it is possible to know which request is each
message part of.


Daemon and Manager
------------------
The Daemon sends very few messages to the Manager as it is only
supposed to manage the processes on a node.

See the full
[protocol]({{< relref "references/protobuf/dm/protocol.md" >}}).


Daemon and Spawner
------------------
The Daemon sends very few messages to the Spawner as it is only
supposed to manage the processes on a node.

See the full
[protocol]({{< relref "references/protobuf/ds/protocol.md" >}}).


Manager and Spawner
-------------------
Manager usually initates the exchange of messages to the Spawner as
a result of a user request.

These exchanges are documented as part of the public protocol but for
all exhanges that are not the result of a user request see the full
[protocol]({{< relref "references/protobuf/ms/protocol.md" >}}).


Public API
----------
This is usually where message exchanges ususally start and end.
Systems and user can send requests to SnowFox through the public
API but they need to be prepared to handle the responses.

See the full
[protocol]({{< relref "references/protobuf/public/protocol.md" >}}).
