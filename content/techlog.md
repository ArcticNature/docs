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
