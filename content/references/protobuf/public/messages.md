+++
date = "2016-04-01T23:28:11+01:00"
force_menu = "ref"
title = "Public Messages Refenrece"

+++

Below is the list of messages exchanged between SnowFox and external software:


`Message::Code`
---------------
{{< highlight proto >}}
package sf.core.protocol.public_api;

enum Code {
  Ack = 1;
}
{{< /highlight >}}

{{% bootstrap-table "table-striped" %}}

| Name     | Code | Meaning                                         |
| -------- | ---- | ----------------------------------------------- |
| Ack      | 1    | This message is an acknowledgement of a request |

{{% /bootstrap-table %}}


`StatusColour`
--------------
{{< highlight proto >}}
package sf.core.protocol.public_api;

enum StatusColour {
  Unkown = -1;
  Green  = 0;
  Yellow = 1;
  Red    = 2;
}
{{< /highlight >}}

{{% bootstrap-table "table-striped" %}}

| Name   | Code | Meaning                                          |
| ------ | ---- | ------------------------------------------------ |
| Unkown | -1   | The status of the system could not be determined |
| Green  | 0    | The system is in the desired status              |
| Yellow | 1    | The system is not in the desired status but it may not be an issue |
| Red    | 2    | The system is in an undesired status             |

{{% /bootstrap-table %}}


`NodeInfoRequest`
-----------------
{{< highlight proto >}}
message NodeInfoRequest {
  optional bool details = 1 [default = false];

  extend Message {
    optional NodeInfoRequest msg = 51;
  }
}
{{< /highlight >}}

{{% bootstrap-table "table-striped" %}}

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `details` | bool | Include status details in the response |

{{% /bootstrap-table %}}


`NodeInfoResponse`
------------------
{{< highlight proto >}}
message NodeInfoResponse {
  message SubSystem {
    required StatusColour colour = 1;
    required int64  code   = 2;
    required string reason = 3;
  }

  required StatusColour colour = 1;
  required int64  code   = 2;
  required string reason = 3;
  repeated SubSystem details = 4;

  extend Message {
    optional NodeInfoResponse msg = 52;
  }
}
{{< /highlight >}}

{{% bootstrap-table "table-striped" %}}

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| `colour` | StatusColour | Overall health of the system |
| `code`   | int64 | Code indicating the exact state of the system |
| `reason`  | string | Human readable message to explain the code |
| `details` | SubSystem | List of status information for subsystems |

{{% /bootstrap-table %}}

Details on how
[status is represented]({{< relref "references/advanced/status.md" >}})
are described in an advanced referece section.
