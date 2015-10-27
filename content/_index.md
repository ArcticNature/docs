+++
categories = ["general"]
date = "2015-10-21T00:25:56+01:00"
tags = ["document"]
title = "_index"

+++

Welcome to SnowFox
------------------
SnowFox is a software to help run, configure and monitor other services.

Writing software is hard and running it reliably is just as hard.
Scalability and high availablility add to the complexity of even the simplest
programs.

Software that depend on many other service (such as database or cache servers)
requires an instastructure to be maintained where all of those softwares
are running reliably and redundantly all the time.

The challange is hard to solve and very, very interesting.

  <div markdown class="alert alert-warning">
    SnowFox is at a very early stage and many features that are
    desired on the final system and part of the long term plan are
    not yet availalbe.
  </div>


## What is SnowFox?
The core concept of SnowFox is a service.
A service is defined as a set of running instances and a configuration.
Around the core unit of a service it is possible to add information that is
required to ensure a servcie is running as intended.

The main goal of SnowFox is to make sure that the sate of a service is clear
and managed easly.
Updates and changes to configuration should be centralised and visible too.


## Quick start
The best way to figure out if a software fits your needs is to try it.
This section will describe the steps needed to run an example SnowFox server.

So instead of chatting about what SnowFox is and how can you benefit from it,
why don't you just try it and answare these questions yourself?
**Ready to go?!?**


### Install
For the time being SnowFox can be installed only from sources.
While this looks scary and complicated it really is not thanks to
SnowFox's build system (based on [grunt.js](http://gruntjs.com/)).

Head of to the [installation from source](development/compile) page.


### Essential configuration
SnowFox loads the configuration from a repository.
The primary repository type will be `git` but a directory can also
be used when SnowFox is built in debug mode.

SnowFox configuration files are written in LUA and executed by the
daemon to set up the environment and configure the services.
This is still easy to read and write for simple setups but also provide a level
of flexibility and dynamicity that complex environments need.

To start with, get the default configuration and start SnowFox in console mode.
As the `git` module is still not implemented we will use the direcotry module:

```bash
git clone git@github.com:stefano-pogliani/snow-fox-example-config.git
snowfox --nodaemonise --dir --repo_path=snow-fox-example-config
```

After starting, SnowFox will check if any service was started in a previous
instance and load that information if so.
Once that is done SnowFox will wait for signals from you.

You may also notice that SnowFox is telling you something about
"Autostarting services".
This is a feature of SnowFox and is documented in the features
and references pages of this site.


### Senging a signal to the daemon
The simplest way to interact with SnowFox is to send it signals.
Signals are a facility provided by the Linux kernel to let processes interact
with other processes in simple ways.

The number and type of operations that can be performed through signals
is therefore limited but these are still key to interact with the system.
If all else fail, signals should still allow you to perform the following:

  * `SIGINT` (release builds) or `SIGTERM` (all builds) can be sent to the
    daemon to request termination.
  * `SIGUSR1` requests status information to the daemon.
    This will be printed to standard output of the daemon itself.
  * `SIGUSR2` requests hot reload of the configuration (not yet implemented).

For example, assuming that SnowFox as started before is still running:

```bash
SFPID=$(pgrep snow-fox | tail -n1)
kill -USR1 ${SFPID}
```

Will make the following appear in the SnowFox console:

```text
SnowFox Daemon
  Version: 0.0.0-26e33f7
  Build on: 2015-10-18 17:38:52
  Config revision: not-applicable
  Running since: 2015-10-22 01:11:02

System State
  Status code: 4
  Status message: Up and running
```


### Using the API
The main way to comunicate with the daemon is through the API.
Such API is exposed as a TCP channel for protocol buffer messages for advanced
or committed users that have access to protocol buffer implementations.

On top of the protocol buffer API the SnowFox JSON project (part of this
repository) build a HTTP API which uses JSON to interact with the daemon.
This API is usefull for those who do not have access to protocol buffers
or want to prototype something quickly.

The default configuration repository tries to start the JSON API when the
daemon is started and the SnowFox JSON is not running.
By default the SnowFox JSON node.js module is expected to be in
`/opt/snow-fox/clients/json`.
See the [installation instruction](install) for more on this.

Once the JSON API are up and running you can hit the following enpoint with
any JSON clients (your browser, extentsion, curl, wget, ...) to interact
with the daemon:

  * `GET http://localhost:1840/server/state`: shows the state of the server.
  * `GET http://localhost:1840/services/<SERVICE>`:
     shows the state of `<SERVICE>`.
     Try `GET http://localhost:1840/services/infra.snow-fox.json` on the
     default configuration for example.
  * `PUT http://localhost:1840/services/infra.snow-fox.json`:
    starts a new instacne of the JSON service.
