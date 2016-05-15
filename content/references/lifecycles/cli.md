+++
date = "2016-05-15T12:39:44+01:00"
force_menu = "ref"
title = "Client Lifecycle"

references = ["lifecycle"]
references_weight = 2
+++

SnowFox client lifecycle events.
<!--more-->

`client::lua::init`
-------------------
Called when the LUA environment for the client is initialised.
The environment is available in `sf::core::context::Client::lua()`
for handlers to manipulate.
