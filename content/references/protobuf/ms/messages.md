+++
date = "2016-04-01T23:28:11+01:00"
force_menu = "ref"
title = "Manager/Spawner Messages Reference"

+++

Below is the list of messages exchanged between the Manager and the Spawner:


`Message::Code`
---------------
{{< highlight proto >}}
package sf.core.protocol.manager_spawner;

enum Code {
  Ack = 1;
}
{{< /highlight >}}

{{% bootstrap-table "table-striped" %}}

| Name     | Code | Meaning                                         |
| -------- | ---- | ----------------------------------------------- |
| Ack      | 1    | This message is an acknowledgement of a request |

{{% /bootstrap-table %}}
