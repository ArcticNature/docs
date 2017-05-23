+++
date = "2017-04-16T00:29:00Z"
title = "Technical log"

+++

I have started this project for fun and personal interest.
This is why I have tried to implement features the "best" possible
way without compromising on stability or software design.

That did not work out ...
The complexity is still high, several things could have been done
better, and the system is not able to do almost anything compared
to the endless list of ideas I have in mind.

To change this I have acepted that sometime it is best to compromise
by implementing something knowing that it will need to change at some
point but without uet knowing how that will have to look like.

This page is therefore here to keep track of what needs to be
improved, re-worked or re-done and what the limits/problems
at the moment that needs to be addressed.


Components tree
---------------
The component tree under the `core` repo can do with a quick
review and reorganisation:

  * Why both models and interfaces? Isn't one enough?
  * The event tree is a bit confusing I guess.


Configuration
-------------
The configuration system is currently synchronous.
That means that configuration of the spawner cannot be linked
to the configuration and advanced options (like cheking if a
restricted port can be opened) are hard/impossible to implement.

The other problem with the current system is "inheritance" of
resources: if a TCP socket is open and a reconfig operation
does not change the details (bind address or port) the current
socket should be reused.

The first problem can be solved with promises and making the
verify and apply stages to become promeses.


Context
-------
There are more context classes than intented and they are more
static than they should be.

  * Only to contexts should exist: static and dynamic.
  * Contexts should have a single `Instance` method.
  * All attributes and methods are per-instance.

Now it is possible to keep track of the context without using the static
`Instance` method which is essential when:

  * Creating a new context while configuration is processed (already done).
  * Guarantee that an async operation will operate on the same context
    (note that most async operations SHOULD NOT do this and be able to cope
    with changes to the global context).


Events
------
The events need to be reworked because the following areas will soon
hit several limits:

  * Event id generation: messy format and assignment.
  * Promise links: need to link events to promises and
      resolve/reject when events are handled.
  * Need some RPC framework to link events across multiple
    processes/nodes.
  * Better tracing and visibility (introduce OpenTracing).

Replace home-grown system with libevent instead?


Module Initialization
---------------------
Currently requires to force inclusion of all symbols.
Need to find a better way to deal with that.

  * http://lxr.free-electrons.com/source/include/linux/init.h#L162
  * http://lxr.free-electrons.com/source/include/linux/init.h#L108
  * https://www.linux.com/learn/kernel-newbie-corner-kernel-symbols-whats-available-your-module-what-isnt
  * https://gcc.gnu.org/onlinedocs/gcc-3.2/gcc/Variable-Attributes.html
  * http://stackoverflow.com/questions/3104923/static-initialization

Could use hooks to make init call nicer (can use labda instead of classes)
but I still need to figure out how to "force" inclusion of the symbol
if no header or source file are directly referenced.


Posix Interface
---------------
The posix interface aims at improving securty and testing.
By not using posix calls directly but through an interface it is possible to:

  * Test calls to the interface.
  * Perform error checking through exception.
  * Decorate calls (with logging/monitoring).
  * Reduce securty attack vectors by restricting function usage.

This is more or less in the code but it is messy:

  * A properly abstract interface is needed.
  * Components should be grouped under `posix.core`.
  * The active interface is located in one place and throws
    if access before setting.


Remote process communication
----------------------------
As the system evolves and more external services are added
a real RPC system is needed.
Specifically the following problems need to be addressed:

  * Should be promise based.
  * Should hide client/server communication.
  * Transport layer needs to cope with reconnects and/or connection pooling.
  * Should provide ping/pong support (if transport layer does not).

Refs and ideas:

  * Look at `libevent` first!
  * Based on connection pools that connect on request?
  * Like https://github.com/active911/connection-pool ?
  * Use callbacks to write/route requests/responses?
  * If using `libevent`, `Connection`s should have a read/write function that
    is wrapped by common code currently in the loop (try-catch, logs, ...)
