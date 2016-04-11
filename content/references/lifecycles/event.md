+++
date = "2016-04-03T10:36:08+01:00"
force_menu = "ref"
title = "Event Lifecycle"

references = ["lifecycle"]
references_weight = 1
+++

Extend and customise events as they move across SnowFox.
<!--more-->


{{% draft %}}
`EventErrorLifecycleArg`
-------------------
The `EventErrorLifecycleArg` is a `BaseLifecycleArg` that stores
a reference to an `Event` instance and an exception.
It is used to pass arguments to `event::error`.
{{% /draft %}}


`EventLifecycleArg`
-------------------
The `EventLifecycleArg` is a `BaseLifecycleArg` that stores
a reference to an `Event` instance.
It is passed to `event::*` lifecycle events that require an
`Event` instance to operate on.


`event::_identify`
-----------------
A special step in the lifecycle of an event that is triggered
just after an event is created but before the `event::initialise`
step.

This step generates the id (and possibly the correlation id) of an
`Event` instance.
The `Event` reference to operate on is passed to the handler in an
`EventLifecycleArg` instance.

Every component that instantiates an object should use the
`sf::core::lifecycle::EventLifecycle::Init` method to ensure the
event is initialised correctly.


`event::initialise`
-------------------
This step is triggered when an `Event` is initialised and identified.
The `Event` reference to operate on is passed to the handler in an
`EventLifecycleArg` instance.

Every component that instantiates an object should use the
`sf::core::lifecycle::Event::Initialise` method to ensure the
event is initialised correctly.


{{% draft %}}
`event::handle`
---------------
This step is triggered when an `Event` is about to be handled.
The `Event` reference to operate on is passed to the handler in an
`EventLifecycleArg` instance.


`event::error`
--------------
This step is triggered when the handling of an `Event` resulted in an error.
The `Event` reference to operate on is passed to the handler in an
`EventErrorLifecycleArg` instance.


`event::done`
-------------
This step is triggered when the handling of an `Event` is terminated,
regardless of possible errors ancountered while handling the event.
The `Event` reference to operate on is passed to the handler in an
`EventErrorLifecycleArg` instance.
{{% /draft %}}
