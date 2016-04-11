+++
date = "2016-04-01T23:28:11+01:00"
force_menu = "ref"
title = "Daemon/Manager Messages Reference"

+++

Below is the list of messages exchanged between the Daemon and the Manager:


`Message::Code`
---------------
{{< highlight proto >}}
package sf.core.protocol.daemon_manager;

enum Code {
  Ack = 1;
  Shutdown = 2;
}
{{< /highlight >}}

{{% bootstrap-table "table-striped" %}}

| Name     | Code | Meaning                                         |
| -------- | ---- | ----------------------------------------------- |
| Ack      | 1    | This message is an acknowledgement of a request |
| Shutdown | 2    | Request the manager process to shutdown         |

{{% /bootstrap-table %}}
