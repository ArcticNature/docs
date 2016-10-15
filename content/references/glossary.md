+++
date = "2016-10-09T14:52:49+01:00"
title = "Glossary"

[menu]
  [menu.nav_right]
    parent = "ref"
    weight = 4
+++

## A
### Agent
Processes running on each SnowFox host to provide additional features
to SnowFox or infrastructure support processes.

Good examples of agents are:

  * [Sensu](https://sensuapp.org/) client.
  * [Salt Stack](https://saltstack.com/) minion.

## C
### Component
SnowFox is designed to be extensible at compile time
and configurable at runtime.  
This is achieved through components: units that add features to SnowFox.

Components can implement the same interface defined in other components
and therefore provide a choice of implementation.
These implementation can rely on external and third-party products which
are considered part of the component itself.

### Connector
A connector is an interface for SnowFox to manage and monitor services.
Examples are:

  * The `local` connector: to manage and monitor processes on the host.
  * The `docker` connector: to manage and monitor local docker containers.

## D
### The Daemon process
SnowFox runs as a daemon process by default.
The `daemon` component is what manages the daemonization process and
manages the Spawner and Manager processes.

## I
### Instance
An instance is the unit monitored by SnowFox.
This can be a process, docker container, or anything that a
connector can register and interact with.

## M
### The Manager process
The manager process waits for user requests and system events
and reacts to them.
It runs in non-privileged mode and runs the majority of the code.

All privileged actions are dispatched to the spawner process.

## S
### Service
A service is a definition to start one or more instances.

### The Spawner process
The spawner process is part of the SnowFox daemon and is
responsible for performing all priviledged actions.
