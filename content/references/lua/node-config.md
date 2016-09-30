+++
date = "2016-09-10T00:03:00+01:00"
force_menu = "ref"
title = "Node configuration"

references = ["lua"]
references_weight = 2
+++

SnowFox nodes are configured through an extensible LUA interface.
This is the core set of options and values provided.
<!--more-->


The `core` object
-----------------
A snow-fox node requres a few options to be set and allows many
other to be tuned.

The `core` object collects all configuration options that relate to
the fundamental functioning of a node rather than a specific
feature of snow-fox.

This section provides a list of options provided in the official
snow-fox distribution.
Remember that components can extend these options so check the
documentation of any additional or modified component you use.

### `core.event_manager`
As SnowFox is an event-based system with an asynchronous run loop
(similar to how node.js works) it needs a way to know if any
of its configured sources has received an event.

The event manager is what looks after all the sources and determines
when one of them has an event that needs to be handled.

The default value of `event_managers.epoll` should work for most
cases and should only be changed by users that understand the
implementation of the event managers in the code.

### `core.logger`
By default SnowFox logs to standard output and standard error.
The logging configuration can be changed by creating a new logger
with the desired options.

Allowed values for this options are picked from the `loggers`
collection and the options of each logger is documented there.

### `core.events_from(source)`
Register an event source for use by the new configuration.
An event source is one of the `sources` with their configuration.

See the definition of each of the availale of `sources` for what
they do and what options are available.


The `connectors` object
-----------------------
Connectors are SnowFox way to interface with processes.
This means how processes start, stop, restart, etc ...
Different connectors' configurations are stored in the `connectors`
object.

See individual `connectors` for details of the available options.

### `connectors["local"]`
The `local` connector is the interface to the local host processes.
Uses `fork` and `execve` to create new processes and signals to
interact with them.


Global functions
----------------
Not all configuration options can be described with one value
or a list of values so components can define extra interfaces
to the user by means of LUA functions.

Below is the list of functions that are registered by core components.

{{% alert info %}}
No global function is available at this time.
{{% /alert %}}


Available `event_managers`
--------------------------
Below is a list of available event manager.

### `event_managers.epoll`
This uses the
[epoll kernel feature](http://man7.org/linux/man-pages/man7/epoll.7.html)
to watch for events on the configured event sources.


Available `loggers`
-------------------
Different loggers target different backends.
By default SnowFox uses the `console` logger to output events to
stdout and stderr to ensure that early messages reach the user.

The following special values are used to configure the logging level:

  * `DEBUG`
  * `INFO`
  * `WARNING`
  * `ERROR`

### `loggers.console`
Writes `DEBUG` and `INFO` messages to standard output
and `WARNING` and `ERROR` messages to standard error.

### `loggers.null`
Drop all log messages.


Available `sources`
-------------------
Sources are the starting point of all activity in SnowFox.
Different features either register their own sources or register
events with either the `ManualSource` or the `ScheduledSource`
which are always available.

### `sources.scheduler`
Configure the `SchedulerSource`.

Events are enqueued with a delay after which the event should be handled.
Delays are expressed as multiple of `tick`s so that speeding up or
down instances can be acieved easly.
This avoids implementation guessing a delay that does not overload
the system and let the user tune delays.

The following options can be passed to configure the source:

{{% bootstrap-table "table-striped" %}}
| Name   | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `tick` | Int  | 1       | Seconds in a `tick` |
{{% /bootstrap-table %}}
