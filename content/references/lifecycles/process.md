+++
date = "2016-04-03T10:34:39+01:00"
force_menu = "ref"
title = "Process Lifecycle"

references = ["lifecycle"]
references_weight = 0
+++

React to the running process evolution and events.
<!--more-->

`process::init`
---------------
Triggered when the process is started.
Used primarily by modules to initialise or register features with the system.

### Registering an handler
Registering a `process::init` handler is a special task because the
registration must occur during static initialisation, a phase where
the initialisation order is ... fuzzy.

To help with that the `sf::core::lifecycle::Process::Initialiser`
template can be used to register the `process::init` handler.
In one of the component's source files, add the following code:

{{< highlight "c++" >}}
using sf::core::interface::BaseLifecycleHandler;
using sf::core::interface::BaseLifecycleArg;

class MyModuleInitialiser : public BaseLifecycleHandler {
 public:
  void handle(std::string event, BaseLifecycleArg* arg) {
    // Initialisation code here ...
  }
}
LifecycleStaticOn("process::init", MyModuleInitialiser);
{{< /highlight >}}

{{% alert "danger" %}}
Keep in mind that static order initialisation is non-deterministic.
As such,
**it is not possible to know in which order `process::init` handlers run**!
{{% /alert %}}


`process::exit`
--------------
Triggered when the SnowFox process is terminated.
