+++
date = "2016-04-01T23:28:11+01:00"
force_menu = "ref"
title = "Daemon/Spawner ProtoBuf Reference"

type = "index"
layout = "summary"
ref_name = "protobuf_ds"
+++

Full details of the Daemon to Spawner (and vice versa)
communion protocol.


`Message::Code`
---------------
{{< highlight proto >}}
package sf.core.protocol.daemon_spanwer;

enum Code {
  Ack = 1;
  Shutdown = 2;
}
{{< /highlight >}}

{{% bootstrap-table "table-striped" %}}

| Name     | Code | Meaning                                         |
| -------- | ---- | ----------------------------------------------- |
| Ack      | 1    | This message is an acknowledgement of a request |
| Shutdown | 2    | Request the spawner process to shutdown         |

{{% /bootstrap-table %}}
