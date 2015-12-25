+++
categories = ["general"]
date = "2015-12-24T18:38:00+02:00"
tags = ["document"]
title = "Protocol Buffers Reference"

+++

The event based nature of the system shapes the API to be message
oriented and asynchronous.
To interact with the system, messages are exchanged with a client using
[protocol buffers](https://developers.google.com/protocol-buffers/?hl=en).

This section of the documentation presents the messages and
contracts of the daemon API.


Common fields
-------------
The base of the API is the `sf.protocols.daemon.Message`.
This ProtoBuf message has a `code` attribute to indicate which request or
response is carried by the message. 
The actual data is contained in a ProtoBuf extention that dependes on the `code`.


Common messages
---------------

  * [Ack](common#ack)


Services
--------

  * [Stop](services#stop)
