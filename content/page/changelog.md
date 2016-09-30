+++
date = "2016-04-07T22:18:41+01:00"
title = "Change log"
force_menu = "status"

+++

Undetermined
------------
- TODO(stefano): Daemon and Spawner log through the manager.
- TODO(stefano): Logger configuration.
- TODO(stefano): Log level filtering.
- TODO(stefano): Spawner and Daemon configuration.
- TODO(stefano): Spawner and Daemon event manager.

0.0.7
-----
- TODO(stefano): Service registry.

0.0.6
-----
- TODO(stefano): TOPIC: Metadata storage
- TODO(stefano): Metadata store model.
- TODO(stefano): SQLite (local) metadata store.
- TODO(stefano): Node metadata store.
- TODO(stefano): Node metadata store configuration.

0.0.5
-----
- TODO(stefano): TOPIC: Events refactoring.
- TODO(stefano): Introduce `Reactor`s (to react to state change).
- TODO(stefano): Refactor `EventSourceManager` to `IoManager`.
- TODO(stefano): Introduce static `EventSource`s.
- TODO(stefano): Refactor `EventDrain` to support buffering and async flushes.

0.0.4
-----
- Create/Migrate ScheduledSources during reconfig.
- Git backed repository.
- Initial configuration loading.
- Migrate Managers's sources (spawner and daemon).
- Migrate ManaualSource during reconfig.
- Node configuration and example repo.
- Node configuration loader.
- Return configuration version with node's status.
- ScheduledSource configuration.
- Support event manager reconfiguration.

0.0.3
-----
- Client introduction.
- Event contexts.
- Lua interface to client API.
- Lua interface to node API.
- Manager's event registry.
- Node status request.
- Node status response.
- Promised events.

0.0.2
-----
- Command line client started.
- Fixed daemon termination with Ctrl+C in console mode.
- Fixed undetected client disconnects.
- LUA utility wrapper classes.
- Manual event source.
- Node name from command line.
- Node name used in event ids.
- Print binary version and exit.
- Public protocol started.
- Scheduled event source.
- Started cluster interface.
- Status definition and helpers.

0.0.1
-----
- Event ids and correlation ids.
- Improved event handler registration at static initialisation time.
- Version header file.

0.0.0
-----
- Core framework.
- Process orchestration and daemonisation.
