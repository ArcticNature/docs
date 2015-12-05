+++
categories = ["general"]
date = "2015-10-26T20:03:56+01:00"
tags = ["document"]
title = "Roadmap"

+++

The features are many but the time is little.
The options are endless and the ideas abundant.
With the list of features I want to implement already large and growing still
this page has the important task of determinig focus.

This, non-exclusive, list of features are the main targets I want to achive
as I progress with the development of SnowFox.
As the system is at the very early stages this list will include a lot of
fundation work but once that is out of the way many cool features will make
their way into it.


Stop instances
--------------
Sopping instances is as important as starting them.


Re-engineer context and static context
--------------------------------------
Context and StaticContext are ways for SnowFox to share information
about the running daemon.
These are curently being passed around and gaining access to them becomes
difficult if it was not expected for the code to have access to them.

Re-engineer access to Context and StaticContext with the use of singletons
and clear up the system for the need to store and pass references.


Instance and service state
--------------------------
Track the state of intances and derive the state of services.
Returns this information through the APIs.


Lifecycles implementation
-------------------------
As with every system, SnowFox goes through phases as it operates.
Hook points can be defined when these phases change or are about to change
so that components can respond to these changes.
Lifecycles will provide a framework for hooks to be triggered and handled.


Repository registry
-------------------
Currently two repository types are supported (only one for release builds)
but more can be added.
The command line parser knows about these repository types and can create
them for us.

It would be better to define a repository for known repoistory types that
maps type identifires to factory methods.
This way the command line implementation can reference the repository only
and does not need to know about repo types directly.

Since the scope of repository instantiation is limited to the command line
parser, it is a good candidate for the repository system before moving
other components to the same design.


Command line redesign
---------------------
The command line parser is currently a static system that knows all the
options, has no extensibility, and is responsible for the creation of
the globally used repository instance.

Change that by making the command line extensible, providing type-based
getters, and delegating the creation of repositories to the repo registry.


Documentation pages
-------------------
The essential set of pages needs to be extended further with the configuration
refenrece page and auto-generated daemon and JSON api pages.
