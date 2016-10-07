+++
date = "2016-04-03T10:24:12+01:00"
title = "Lifecycles Reference"

type = "index"
layout = "summary"
ref_name = "lifecycle"

[menu]
  [menu.nav_right]
    parent = "ref"
    weight = 2
+++

Part of the flexibility and extensibility of SnowFox comes from Lifecycles.
Lifecycles are a way to react to internal system events and decouple
handing of actions.
The component system also relies on Lifecycles to dynamically inject features
and alternative implementations.

Lifecycles revolve around the `sf::core::interface::Lifecycle` class,
which behaves in a similar manner to Node.js event emitter.

All events are registered and triggered on the same `Lifecycle`
singleton instance throughout the system.
Name spaces in the event name are used to avoid conflicts with context.


Lifecycle API
-------------
Interactions with the Lifecycles system can be divided into two:

  * Event handling: the side that reacts to changes in the system.
  * Event triggering: the side that informs lifecycles of a change.

Checkout the Lifecycle interface in the source code at
https://github.com/ArcticNature/core/blob/master/interface/lifecycle/include/core/interface/lifecycle.h

### Example: acting at process initialisation
{{< highlight "c++" >}}
//! Example of Lifecycle event handler.
class ExampeInitHandler : public BaseLifecycleHandler {
 public:
  void handle(std::string event, BaseLifecycleArg*) {
    // Some code that needs to run when the process starts.
  }
};


int main() {
  // Register the handler.
  LifecycleHandlerRef handler(new ExampeInitHandler());
  Lifecycle::on("process::init", handler);

  // Some init logic ...

  // Trigger the `process::init` event.
  Lifecycle::trigger("process::init");
}
{{< /highlight >}}


List of official Lifecycles
---------------------------
Events are nothing more then strings that identify a list of handlers.
Lifecycles are a sequence of these events triggered by the system.
There is no formal checking or definition of lifecycles.

While the system (and components in it) can create their own lifecycles,
this section of the reference pages describes the lifecycles
part of the core components of SnowFox.
