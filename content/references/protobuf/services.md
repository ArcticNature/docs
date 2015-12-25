+++
categories = ["general"]
date = "2015-12-13T18:32:00+01:00"
tags = ["document"]
title = "Services Protocol Buffer Reference"

+++


Stop
----
```proto
required Code code = Message::Code::ServiceStop;
required sf.protocols.daemon.ServiceStop msg = {
  required string instance_id = "instance id";
  required string service_id  = "service id";
}
```
When stopping a service a message with code `Message::Code::ServiceStop`
is sent with a `sf.protocols.daemon.ServiceStop` extention set to provide the
information about the service and instance to stop.

The daemon responds with an [Ack](../common#ack) message to the client.
