+++
date = "2016-05-17T20:47:54+01:00"
force_menu = "ref"
title = "Event based system"

references = ["advanced"]
references_weight = 0
+++

SnowFox is an event based system.
`Event`s are created by different `EventSource`s.  
Each `snow-fox-*` process configures an `EventSourceManager` and the
relevant `EventSource`s and enters the event loop.

This page descrives the events interface and semantics:


`Event`s interface
------------------
Events:

  * Are subclasses of the `sf::core::model::Event` abstract class.
  * Define an handling process (`handle` method).
  * Can optionally cope with its own failures (`rescue`).

The `Event` interface is defined in
https://github.com/ArcticNature/core/blob/master/model/event/include/core/model/event.h


Sharing state
-------------
Events can be given parameters when they are created by the event source
that creates them but they cannot otherwise interact with future events.

This means that an event generated as a response to another event cannot
access the context in which the original event was created.

For example, the `snow-fox-client` provides the `node.status()` method.
Here is what happens when the user calls this method:

  1. The client returns a pending response to the user.
  2. The client sends a request to the SnowFox node serving it.
  3. The node processes the request and determines the state.
  4. The node sends the state back to the client.
  5. The client processes the response and resolves the pending response.

But how does the client know which pending response to resolve?
While `Event` instances represent independent events across the system,
they are related to one another as they aim to acomplish the same goal.

Events that relate to one another share the same `correlation_id`.
When the client receives a status response, it can use the `correlation_id`
to figure out which past event triggered the request.

But that on its own is still not enough to store context.
The `sf::core::model::EventContext` template is here to do the rest.
Concrete `EventContext`s are maps from `correlation_id`s to contexts.
