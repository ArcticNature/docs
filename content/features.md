+++
categories = ["general"]
date = "2015-10-26T20:03:56+01:00"
tags = ["document"]
title = "Features"

+++

Main features
=============
The list of features offered by SowFox will keep groing but the core ideas
that where with it when it started are going to dictate most of the use cases.
This page is here to illustrate what are those core ideas and how they
can be useful.


Build around versioning
-----------------------
The use of a repository for configuration files allow a versioning oriented
configuration system.

Each service and instance in the system is linked to a verstion of the
configuration repository.
This allows users to know the configuration at which a service was started
as well as to keep track of the evolution of SnowFox configuration.


Visibility on running services
------------------------------
Services are defined in the configuration once and many instance can be
started out of those services.
Once instances are stared they are listed in the system with their state.
This means that seeing running services and instances is quick and easy.


Centralised service management
------------------------------
Manage services and configuration versions from a central location.
Quickly start and stop instance and services.
Use plugins to monitor, profile and oversee processes (not yet implemented).


Machine and user friendly API
-----------------------------
The protocol buffer API allows systems to interact with SnowFox dierctly
to take advantage of all its features.
Efficent and consistent cooperation among machines will not stop users
though!
The JSON API build on top of the protocol buffer API means web pages
and users can interact with the daemon as well.
