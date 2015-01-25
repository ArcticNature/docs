Green Torch
===========
### Work in progress notice
Warning! This project is in very early stages.
No feature is currently complete and several things
are going to change.


Why?
----
Keeping track of what is going on in a system is hard enough.
When you have several servers running different software,
or different versions of the same ones, help is needed.
Green Torch is a software meant to help run and monitor
an heterogeneous set of software.

This project was born because I wanted to understand the
challenges of running several services and those of implementing
tools to solve them.


What is it not meant to do?
---------------------------
Keeping the scope of a software under control is fundamental
to develop a working and stable project.

To help define the scope of Green Torch here is a list of tasks that
this tool is not intended to perform.
Other software can be used in conjunction with Green Torch to
perform all the tasks you need.

  * Configuration management.
  * Packaging system.
  * Software deployment.


What is it meant to do?
-----------------------
The main goal is provide a tool that will help run software on
one or more machines in an easy way and most importantly it
should help you deal with things when they go wrong.

### Main features
  * Build around configuration versioning:
    Green Torch is designed to deal with versioned configurations
    for itself and the software it runs.
  * JSON API:
    The daemon uses a custom format for control messages but a JSON API
    is offered by a Node.JS server.
    Other formats can be provided with the same approach.
  * Quickly start and stop your services.
  * Visibility on running services:
    Which services? Which versions? What states are they in?
    These are the kind of questions you should answer easily.


Getting started
---------------
Before you begin to spawn processes there are a few concepts to understand.
They are not many and they are explained in the
[System Overview](@ref system-overview) page.

As of right now Green Torch needs to be compiled from sources.
This is not difficult and is explained in
[Compiling the sources](@ref compile-how-to).

Once you read the above you can move on to [First steps](@ref first-steps)
and start to discover the system.


Road map
--------
Several features are being developed and many others are planned.
This is a short, non exhaustive, list of features that I plan to
work on/release next.

  * File, Syslog and FluentD logging.
  * Configuration hot reload.
  * Web front end.
  * StatD integration.
  * Define strict messages format, JSON API still offered by Node.JS server.
  * Monitor daemons and other externally started processes.

