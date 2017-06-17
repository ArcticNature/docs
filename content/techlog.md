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
point but without yet knowing how that will have to look like.

This page is therefore here to keep track of what needs to be
improved, re-worked or re-done and what the limits/problems
that needs to be addressed are at the moment.


Command line parser
-------------------
Look at https://github.com/jarro2783/cxxopts as a CLI parser
to drop GFLAGS or at least use it to restructure the interface.


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

The second problem can be addressed with the introduction of
connection pools (even though they mainly address a different problem):

  * Connection pools track connections, with the help of connection factories.
  * Connection factories have a hash that reflect parameter such as
    * Protocol (tcp/udp/unix).
    * Role (listener/connection).
    * Local/remote address.
    * Local/remote port.
    * Any other option that require replacement on reconfig.
  * Connection pools expose that hash to the configuration layer.

Reconfiguration of such resources then proceeds as follow:

  1. A new connection factory and pool are created based on the new config
     (but no connection is actually created for the pool).
  2. The connection pool is used to generate the hash.
  3. The hash for the matching active connection pool is looked up.
  4. The hash of the new and current pools are compared:
    * If they match the old pool is used for reconfiguration
    * If they do not the newly created pool is used.


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


Fuzz testing
------------
Read about the topic and introduce https://github.com/google/oss-fuzz
to find bugs and securty issues.


LUA redesign
------------
The `core.utility.lua` package was "designed" to map the C API onto C++.
Reconsider the entire design by starting with use patterns first.
Pay particular attention to:

  * Better support for custom types.
  * GC managed shared pointers.
  * Support for corutines (will be needed to support async operations).

Skim through existing libraries and consider using one (at least for design):

  * https://github.com/jeremyong/Selene
  * http://www.jeremyong.com/blog/2014/01/10/interfacing-lua-with-templates-in-c-plus-plus-11/
  * https://github.com/ThePhD/sol2/
  * https://github.com/AdUki/LuaState


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


Option objects
--------------
Option objects were introduced to allow components to store basic types
in different contexts (`Static`, `CLIParser`, ...).

They make the code extremely difficult to read and
they are difficult to maintain:

  * What keys are set?
  * Where are they set?
  * Where are they used?
  * Who is in charge of which keys?

As we already have static and dynamic contexts plus other forms of
state information (active `Logger` and `Cluster` instance) try to remove
these generic containers and replace whatever is needed with fixed
attributes/methods provided by other components.


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
