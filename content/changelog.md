+++
date = "2016-04-07T22:18:41+01:00"
title = "Change log"
force_menu = "status"

+++

{{% draft %}}
Undetermined
------------
- TODO(stefano): Daemon and Spawner log through the manager.
- TODO(stefano): Logger configuration.
- TODO(stefano): Log level filtering.
- TODO(stefano): Spawner and Daemon configuration.
- TODO(stefano): Spawner and Daemon event manager.
- TODO(stefano): Introduce opentracing.io
- TODO(stefano): Rewrite protobuf documentation in terms of operations
                 (with with detailed sections on message attributes and
                 components interaction).
- TODO(stefano): Group event id and cor_id in EventTracer objects.
- TODO(stefano): Implement and use `EventTracer.attach(Event)`.

0.1.5
-----
- TODO(stefano): TOPIC: metircs.
- TODO(stefano): Define a Metrics interface.
- TODO(stefano): Create backends to collect and expose metrics.
- TODO(stefano): Allow configuration of metrics.
- TODO(stefano): Count registered sources and drains.
- TODO(stefano): Count `Event`s by type and correlation id.
- TODO(stefano): Count configuration reloads.
- TODO(stefano): Count errors.

0.1.4
-----
- TODO(stefano): TOPIC: Service start/stop/status.

0.1.3
-----
- TODO(stefano): TOPIC: Service load/list.

0.1.2
-----
- TODO(stefano): TOPIC: Service registry.

0.1.1
-----
- TODO(stefano): TOPIC: Metadata storage
- TODO(stefano): Metadata store model.
- TODO(stefano): SQLite (local) metadata store.
- TODO(stefano): Node metadata store.
- TODO(stefano): Node metadata store configuration.
{{% /draft %}}

0.1.0
-----
- TOPIC: Events refactoring.
- TODO(stefano): Introduce promises for events (close/error).
- TODO(stefano): Reimplement connected sources.
- TODO(stefano): Introduce static `EventSource`s.
- TODO(stefano): Introduce promises for continued work.
- TODO(stefano): Handle global promise failures by re-thworing them in the run loop.
- TODO(stefano): Create a `PromiseCollection` in the static context.
- TODO(stefano): Add a `close` promise to sources and drains.
- TODO(stefano): Rework connected sources and drains to use promises.
- TODO(stefano): Deprecate `EventContext`s.
- TODO(stefano): Allow blocking of `snow-fox-cli` interpreter.
- TODO(stefano): Re-work drains/sources hierarchy to match docs.
- Add failure modes documentation.
- Add glossary page to documentation.
- All writes use flush instead of FDs.
- `Context` static methods to uppercase (lowercase for instance version).
- Implement `Buffer`s for drains buffering system.
- Make Drain and Source FD accessible to LoopManagers only.
- Move FD check to new `core.utility.net`.
- Quick access to full reference pages.
- Refactor `Event` error handling with `std::exception_ptr`.
- Refactor `EventDrain` to support buffering and async flushes.
- Refactor `EventSource` to improve interface.
- Refactor `EventSourceManager` to `LoopManager`.
- Refactor `MessageIO::send` to use drains instead of fds.
- Use lifecycles to auto-add drains with data.

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
