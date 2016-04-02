+++
date = "2016-04-01T23:17:42+01:00"
force_menu = "ref"
title = "Protocol Buffer Messages"

+++


Common elements
---------------
All ProtoBuf interfaces share a pattern which is used to build the
APIs upon: all messages are extensions of a base `Message`.

Each message has a `code` attribute, whose value comes from an
interface-specific `Message::Code` enum.
The value of `code` uniquely identifies the message being sent or
received.

If a `Message` needs to pass additional parameters or data along
with the `code`, extensions are used to achieve this.

### `Message`
{{< highlight proto >}}
package sf.core.protocol.PROTOCOL;

message Message {
  enum Code { ... }

  required Code code = 1;
  extensions 50 to max;
}
{{< /highlight >}}

#### Message attributes
{{% attributes %}}
{{% attribute
  "sf.core.protocol.PROTOCOL"
  "package"
  "The namespace for messages and extentions in the protocol"
%}}
{{% attribute
  "code"
  "Message::Code"
  "Identifier of the message being sent"
%}}
{{% /attributes %}}

#### Description
The container for exchanged messages.
Set `code` and extensions as needed.


Daemon/Manager
--------------
The daemon uses protocol buffers to inform the manager of changes
to the core SnowFox processes (the `spawner` and the `daemon` itself).

The full reference of exchanged messages can be found
[here]({{< relref "references/protobuf/daemon-manager.md" >}}).


Daemon/Spawner
--------------
The daemon uses protocol buffers to inform the spawner of changes
to the core SnowFox processes (the `manager` and the `daemon` itself).

The full reference of exchanged messages can be found
[here]({{< relref "references/protobuf/daemon-spawner.md" >}}).


Manager/Spawner
--------------
The manager decides how to react to events from the user and the system.
For security reasons, the manager should not run as a privileged process due to
its complexity and the number of systems it interacts with.

To allow the manager to run as a non privileged process while keeping the
ability to execute privileged actions when needed, the manager sends commands
to the spawner requesting it to act on its behalf.

The full reference of exchanged messages can be found
[here]({{< relref "references/protobuf/daemon-spawner.md" >}}).


{{% draft %}}
Public API
----------
In order to allow the user, as well as other systems, to interact
with SnowFox, the public API was built.

The full reference of available messages, and the expected
responses, can be found [here]({{< relref "references/protobuf/public.md" >}}).
{{% /draft %}}
