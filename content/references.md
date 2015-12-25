+++
categories = ["general"]
date = "2015-10-26T20:03:56+01:00"
tags = ["document"]
title = "References"

+++

Full reference pages
====================
SnowFox is a software based on components and micro-services that interact
with each other to provide the full functionality of the final product.
As such, the reference pages of sub-systems are devided to make updates
and lookup simpler and faster.

  <div markdown class="alert alert-warning">
    These guides are a work in progres.
    Links to pages may lead to dead ends when documentation is
    desired but not yet available.
  </div>


Configuration reference
-----------------------
The configuration system for SnowFox is based on LUA and a set of extentions
that allow domain specific operations.
The configuration options and directives are documented in the
[Configuration Reference](configuration) page.


Protocol buffers reference
--------------------------
Interaction with the daemon is done with protocol buffers over TCP.
The [Protocol Buffers Reference](protobuf) page describes
the messages and how they are structured.


JSON API reference
------------------
To semplify access to the daemon the JSON API wraps the protocol buffers
above into an HTTP API that uses JSON to exchange data.
Although the structure of this API is based on the protocol buffers it
wraps, the structure of the data exposed and the methods to access it
will be different though so consult the [JSON API Reference](json)
page.


Event flow reference
--------------------
Since SnowFox is an event based system components interact with each other
through events and features are implemented as reactions to events.
Event flows are documented in the [Flow Reference](flows) section.
