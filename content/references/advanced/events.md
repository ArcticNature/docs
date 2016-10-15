+++
date = "2016-05-17T20:47:54+01:00"
force_menu = "ref"
title = "Event based system"

references = ["advanced"]
references_weight = 0
+++

SnowFox is an event based system.
`Event`s are created by different `EventSource`s.  
Each `snow-fox-*` process configures a `LoopManager` and the
relevant `EventSource`s and enters the event loop.

This page descrives the events interface and semantics:


The `Event`s interface
----------------------
Events:

  * Are subclasses of the `sf::core::model::Event` abstract class.
  * Define an handling process (`handle` method).
  * Can optionally cope with its own failures (`rescue`).

The `Event` interface is defined in
https://github.com/ArcticNature/core/blob/master/model/event/include/core/model/event.h

### Events and promises
Events are closer to fire and forget operations:
something happens and it is handled.

Promises are an easy way to perform part of a task and resume it later in
the futere when more information is available or operations are complete.

When an event needs to resume work at a later time it can create a promise.
Promises can be stored in `sf::core::context::Static->promises()`, a map from
string (usually the `Event`'s `correlation_id`) to a `Promise` object.

Promises can be resolved or failed at a later stage using the
`PromiseFullfill` and `PromiseReject` events.


The run loop
------------
SnowFox is a single-threaded, event oriented process.

This means the process performs tasks that enqueue operations that are
performed by the operating system or other processes and waits for the
responses to requestes made to these systems.
External systems can also send events to SnowFox and trigger reactions
from it.

The system is based around `EventSources` and `EventDrains`.
Sources are notified by the OS when an event is ready to be received.
Drains are used by the process to enqueue outgoing requests or responses.
When the OS determines that the drain is ready to send data SnowFox will
flush the buffer over the channel untill the buffer is empty.

The majority of errors are logged and ignored to avoid stoppoing the
entire SnowFox node in the presence of small or even transient errors.
The eventual consistency nature of SnowFox will retry failed tasks later.

The sequence of events generally goes as follows:
```text
+-------------+ +-------------+ +------------+
| EventSource | | EventSource | | EventDrain |
|   (parse)   | |   (parse)   | |  (flush)   |
+-------------+ +-------------+ +------------+
      \               |               /   ^
       \______________|______________/    |
                      V                   |
                  +-------+               |
                  | Event |---------------/
                  +-------+
                   |     |
                   X     X
                   |     |
                   V     V
   +----------------+   +-------------+
   | AbortException |   |    Other    |
   | CleanExit      |   | SfException |
   +----------------+   +-------------+
            |                  |
            V                  V
+-------------------+   +-------------------+
| (Critical) System |   | Ignore and repeat |
|    termination    |   +-------------------+
+-------------------+
```


The `LoopManager`
---------------
The `LoopManager` is what SnowFox uses to track all the sources and drains
that are active.

When a source is ready the `LoopManager` will stop waiting and call the parse
method of the source.
If the method returns an `Event` the run loop will handle it before
returning to the `LoopManager` for more events.

When a drain is ready the `LoopManager` will stop waiting and call the flush
method on the drain.
Once the drain returns it indicates if the buffer is empty or not.
If the buffer is empty the drain is removed from the manager.
Drains add themselves back to the manager when the buffer is filled again.

The `LoopManager` may return a null `Event` if a source or a drain triggered
an change that did not lead to the creation of a real `Event`.
In this case the run loop simply ignores the null `Event` and resumes waiting.


Scope of drains and sources
---------------------------
Event drains are stored in the static context index by ID.  
Whenever a component registers a new drain it ends up in here,
regardless of its expected lifetime.

This is so that drains can survive configuration reloads and
pending operations can be completed.
This also means that configuration reloads do not teminate
connections that are still active.

On the other hand not all sources should survive configuration reloads
but some should, depening on what they are:

  * **Listener sources**:
    these sources wait for connections to be established
    and create secondary sources for each connection.
    Should not survive configuration reloads (may be replaced by them).

  * **Configured sources**:
    are similar to listeners in that the wait for other processes to send
    events but are usually waiting for responses to requests sent by SnowFox
    (i.e: metadata storage, `ScheduledSource`, ...).
    Should not survice configuration reloads.

  * **Scoped sources**:
    these sources are linked to specific connections (usually with clients).
    Should survive configuration reloads and clean itself up on close.

  * **Static sources**:
    Are internal sources like the `ManualSource` or the
    spawner and daemon sources.
    They are never going to change or be closed.

The sources that need to survive configuration reloads are stored
in the static context while the sources that are replaced by a
configuration reload are stored in the dynamic context.

Sharing state
-------------
{{% alert "danger" %}}
This feature is deprecated in favour of **promises** (see above).
{{% /alert %}}

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
