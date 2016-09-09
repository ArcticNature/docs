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
  NodeInfoRequest  = 2;
  NodeInfoResponse = 3;
  Introduce = 4;
}
{{< /highlight >}}

{{% bootstrap-table "table-striped" %}}

| Name | Code | Meaning |
| ---- | ---- | --------|
| Ack  | 1    | Acknowledgement of a request |
| NodeInfoRequest | 2 | Request information about the node |
| NodeInfoResponse | 3 | Response to a NodeInfoRequest |
| Introduce | 4 | A client is now connected |

{{% /bootstrap-table %}}


`ClientIntroduce`
-----------------
{{< highlight proto >}}
message ClientIntroduce {
  required string client_id = 1;

  extend Message {
    optional ClientIntroduce msg = 52;
  }
}
{{< /highlight >}}

{{% bootstrap-table "table-striped" %}}

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| `client_id` | string | Id for the client to use in future requests |

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
  message ConfigVersion {
    required string effective = 1;
    required string symbolic  = 2;
  }

  message NodeVersion {
    required string commit  = 1;
    optional string taint   = 2;
    optional string version = 3;
  }

  message NodeInfo {
    required string name = 1;
    required NodeVersion version = 2;
    optional ConfigVersion config = 3;
  }

  message SystemStatus {
    required StatusColour colour = 1;
    required int64  code   = 2;
    required string reason = 3;
  }

  message SubSystem {
    required string name = 1;
    required SystemStatus status = 2;
  }

  optional NodeInfo node = 1;
  optional SystemStatus overall = 2;
  repeated SubSystem details = 3;

  extend Message {
    optional NodeInfoResponse msg = 51;
  }
}
{{< /highlight >}}

{{% bootstrap-table "table-striped" %}}

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| `node.name` | string | Name of the node. |
| `node.version.commit`  | string | Git commit the daemon was built from. |
| `node.version.taint`   | string | Flag indicating the state of the git repo at build time. |
| `node.version.version` | string | SemVer of the daemon. |
| `overall` | SubSystem | Overall status information for the node. |
| `details` | [SubSystem] | List of status information for subsystems. |

{{% /bootstrap-table %}}

Details on how
[status is represented]({{< relref "references/advanced/status.md" >}})
are described in an advanced referece section.


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
