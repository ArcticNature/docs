Snow Fox
========

    >! Warning! This project is in very early stages.
    >! No feature is currently complete and several things
    >! are going to change.

Managing an infrastructure is a complex task even when
few machines are involved.

What processes are running where?
And are they really running or just supposed to be?
What configuration is each service using and what was changed
at any point in time?

These questions scratch the surface of what I am hoping to achieve
but they are also the first goals that I aim for.
More things like pulgin support, containers, periodic tasks and
distributed systems are part of the project but are far for now.

Motivation
----------
I am a developer interested in system administration with focus (unsurprisingly)
on administration tools, both as their user and as their developer.
So I started looking into a few of those tools out there and started
with log collection, then metrics monitoring.
This interest resulted in me trying to set up, on the same box,
the two following systems:

  * Log collection: `Fluentd -> ElasticSearch -> Kibana`
  * Metrics: `CollectD -> StatsD -> InfluxDB -> Grafana`

This was not an easy task but I suggest you try it (you can of course choose
your alternative, but remember that systems that are made to cooperate are
easier to maintain collectively).
It was a lot of fun, truly educational, and another source of
inspiration for this project.

While I could have done all this with Init.d (or any other Linux init solution)
I just wanted somewhere were I could write what command needs to be run and
check if the process is running or not.
Also there have been so many configuration changes that I'm still not sure
a couple of times how/why I ended up with my current configuration
and I did not have GIT to remind me (my bad).
And don't even get me started on trying to remember which processes
start themselves on boot, which do not have init scripts and which are not
deamonisable and require another solution.

For all those reasons, and a few more, I decided to start this project.

What is it not meant to do?
---------------------------
Keeping the scope of a software under control is fundamental
to develop a working and stable project.

To help define the scope of the project here is a list of tasks that
are not going to be performed.
Other software can be used in conjunction with SnowFox to
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
    SnowFox is designed to deal with versioned configurations
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
[System Overview](overview.md) page.

As of right now SnowFox needs to be compiled from sources.
This is not difficult and is explained in
[Compiling the sources](compile.md).

Once you read the above you can move on to [First steps](first-steps.md)
and start to discover the system.


Road map
--------
Several features are being developed and many others are planned.
This is a short, non exhaustive, list of features that I plan to
work on next.

  * Define strict messages format, JSON API still offered by Node.JS server.
  * File, Syslog and FluentD logging.
  * Configuration hot reload.
  * Web front end.
  * StatD integration.
  * Monitor daemons and other externally started processes.
