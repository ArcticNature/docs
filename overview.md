System Overview {#system-overview}
===============
GreenTorch is designed to be an easily extensible and flexible system
to help technical people run internal and production software.

This document presents an overview of the system and its components
both from a user and a development prospective.
Knowing how a system is implemented allows understating of how it
works!

Components and events
---------------------
The full system is composed by several programs:
  * green-torch-daemon
  * green-torch-json
  * green-torch-web

The C++ daemon is the core of GreenTorch, spawning processes and
managing services it is controlled through a TCP connection.

The protocol to control the daemon is meant to be machine efficient
more than user friendly, which is why a Node.JS server offers a JSON
API to communicate with the daemon.
This allows the potential of one API server translating for multiple
daemons as well as easier backward compatibility.

On top of the JSON API there will be an HTML application that will
make it easy to access all the offered features.

Structure of the Daemon
-----------------------
In an attempt to keep the complexity of the daemon in check and its
extensibility easy it is internally divided into multiple components.
This section will provide an overview of how the daemon works and
what its components are.

The first thing to understand is that the daemon is event driven.
The other key aspect is that the majority of the code does not
require root privileges but some features do.
For this reason the daemon is divided into two processes.

### The spawner process
During initialisation the daemon forks off a second process that
will drop privileges.
The root process is responsible for performing the privileged actions.

It keeps almost no state by itself and uses a bi-directional pipe
to exchange messages with the manager process (the unprivileged child).

The spawner uses connectors to handle messages from the manager.
Based on what connectors are enabled/compiled in the Spawner the system
may have limited functionality but not even require root privileges.

### The manager process
The manager is responsible for implementing all the logic an keep
track of the state of the system.

The core of the manager is the event manager, which manages a set of
event sources and triggers events.
The run loop waits for the event manager to trigger anything and
starts the handling of the triggered events.

Beside the event related components and a few others (internal things
such as logging and state), the manager is also responsible for
managing and loading the configuration.
Configuration files are written in [LUA](http://www.lua.org/) and
the manager provides additional commands depending on the
type of configuration being loaded (e.g: system, service).

