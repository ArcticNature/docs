+++
date = "2016-05-15T12:39:44+01:00"
force_menu = "ref"
title = "Configuration Lifecycles"

references = ["lifecycle"]
references_weight = 3
+++

SnowFox configuration lifecycles for node, cluster.
<!--more-->


`NodeConfigLifecycleArg`
------------------------
Argument passed to `config::node::*` events to provide access to:

  * `sf::core::interface::NodeConfigLoader* loader()`
  * `sf::core::utility::Lua* lua()`


`config::node::collect`
-----------------------
After the configuration files have been executed this event is
triggered to collect configuration intents from the LUA environment
and add them to the configuration loader.


`config::node::init-lua`
------------------------
Initialise the Lua environment for a NodeConfigLoader.
This handler should be used by components to provide an interface
to the users to configure the components themselves.
