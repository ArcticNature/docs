+++
date = "2017-04-21T18:20:41+01:00"
title = "Change log"
force_menu = "status"

+++

{{% draft %}}
Template
--------
_Topic_: This is what version blocks look like.

### New Features
- ???

### Improvements
- ???

### Breaking changes
- ???

### Fixes
- ???

### Others
- ???

Undetermined
------------
_Topic_: Draft, uncommited and unordered, roadmap.

- TODO(stefano): Daemon and Spawner log through the manager.
- TODO(stefano): Log level filtering.
- TODO(stefano): Spawner and Daemon configuration.
- TODO(stefano): Spawner and Daemon event manager.
- TODO(stefano): Rewrite protobuf documentation in terms of operations
                 (with with detailed sections on message attributes and
                 components interaction).
- TODO(stefano): Upgrade to latest hugo.
- TODO(stefano): ArangoDB metadata backend.
- TODO(stefano): Resource (CPU && RAM) tracking.
- TODO(stefano): Resource (CPU && RAM) allocation spec.
- TODO(stefano): Resource (CPU && RAM) limit enforcing.
- TODO(stefano): Additional resource tracking.

- TODO(stefano): Look into LUA corutines to suspend execution (implement `include` in config and `wait` in client).
- TODO(stefano): Improve lua C++ interface with `C++11/14` feats:
  * Template specialization in stack `to<Type>`.
  * Reimplement proxy type with functors and lambdas.
  * Simple lua container for `std::shared_ptr<?>`.

- TODO(stefano): Use promeses in `snow-fox-cli` interpreter.
- TODO(stefano): Convert node interface to use promises.
- TODO(stefano): Rewrite repo interface to be promise based.

- TODO(stefano): Storage hints:
  * Format metadata keys as `namespace:key`.
  * Store a map from `namespace` to usage hint.
  * Metadata implementations can use these hints to optimize storage.

- TODO(stefano): Rebuild and generalise build system.
  * Based on stages (generate files, compile, link, run, analyse, lint, gcovr, lcov).
  * Based on ninja?
  * Per-component and global stages (compile vs lcov).
  * Jenkinfile or equivalent with the CI stages.
  * Dockerfile in `dev-tools/docker/jenkins` to spin up a jenkins local server?

0.6.1?
------
_Topic_: Cluster membership.

- TODO(stefano): Node (re)join at start.
- TODO(stefano): Nodes have buddies to check up on their health.
- TODO(stefano): Primary as a service: nodes can be primary/secondary for a cluster wide task.
- TODO(stefano): Buddies detect nodes faults.
- TODO(stefano): Forget nodes (not automatically done).

0.6.0?
------
_Topic_: Configuration refactoring and context instance.

- TODO(stefano): Create `core.config.node` to introduce node options.
- TODO(stefano): Extend `core.config.base` with `ConfigMultiStep`.
- TODO(stefano): Change node configuration to new class.
- TODO(stefano): Config loader stores and builds a `core.state.global` container.
- TODO(stefano): Update components to match new config format.
- TODO(stefano): Delete old code.
- TODO(stefano): Allow configuration of metrics.
- TODO(stefano): Re-work logging configuration.
- TODO(stefano): Store promise handler in `core.state.global`.

0.5.0?
------
_Topic_: Libevent2, RPC framework and tracing.

- TODO(stefano): Rewrite the event system to use libevent?
- TODO(stefano): RPC abstract framework.
- TODO(stefano): HTTP RPC framework.
- TODO(stefano): JSON HTTP RPC framework.
- TODO(stefano): Introduce http://opentracing.io/ with Zipkin support.
- TODO(stefano): Trace node status.
- TODO(stefano): Trace service list.
- TODO(stefano): Trace service load.
- TODO(stefano): Trace service start.

0.4.0?
------
_Topic_: Introspection with metrics and logs.

- TODO(stefano): Create backends to collect and expose metrics.
- TODO(stefano): Count configuration reloads.
- TODO(stefano): Count errors.
- TODO(stefano): Gauge pending promeses.
- TODO(stefano): Move logger instance out of `Context`.
- TODO(stefano): Move `ScoperdLogger` out of `Context`.
- TODO(stefano): Log to fluentd https://github.com/m-mizutani/libfluent
- TODO(stefano): Process name in the logs (to replace process-group option).
- TODO(stefano): Multi-logger for stdout/stderr and fluentd.

0.3.0?
------
_Topic_: Docs improvement and reorganization.

- TODO(stefano): Move site to `docs.site`.
- TODO(stefano): Add gitbook component.
- TODO(stefano): Create `docs.admin` for end-user docs.
- TODO(stefano): Create `docs.failures` for failure modes.
- TOOD(stefano): Create `docs.develop` for development docs.
- TODO(stefano): Add top level reference menu for detailed docs.

0.2.1?
------
_Topic_: Service status and stop.

- TODO(stefano): Searchable metadata (with support for simple attribute matchers).
- TODO(stefano): List services and instances in the register.
- TODO(stefano): ???
{{% /draft %}}

0.2.0
-----
_Topic_: Service start and registry.

- TODO(stefano): Start instance client command.
- TODO(stefano): Start instance server handler.
- TODO(stefano): Load instance definition.
- TODO(stefano): Send instance start to spawner.
- TODO(stefano): Start instance.
- Define service and service instance.

### New Features
- Create `core.config.base` for base config environment.
- Create `core.config.service` to return a `ServiceDescription`.
- Create `core.state.global` to track singleton intances.
- Create `core.testing.cluster` for tests.
- Create `core.testing.static` for tests.
- Iterate over keys in a LUA table (to be improved).
- Script to lcov coverage data into HTML.

### Improvements
- Convert LUA value to JSON.
- Iterate over string and int `LuaTable` keys.
- Skip rebuilding external dependencies that are not idempotent.

### Breaking changes
- Move `Node::me()` to `Cluster::myself()`.
- Move cluster instance out of `Context`.
- Simplify ColourStatus by removing status code.

0.1.1
-----
_Topic_: Metadata storage.

### New Features
- Abstract MetaData store interface.
- Cluster metadata store and configuration.
- JSON FileSystem metadata store.
- Local node metadata store and configuration.
- Node config lua extention hooks.
- `ProxyLogger` to use as python's `getLogger`.

### Improvements
- Create `core.testing.hooks` for hook test utils.
- Create `core.testing.metadata` for metadata test utils.
- Create `core.testing.promise` for test utils.
- Start converting `Context::logger` and `Logger::fallback` to `ProxyLogger`.
- Start dev tools with a docker based builder.

0.1.0
-----
_Topic_: Events refactoring.

### New Features
- Add failure modes documentation.
- Add glossary page to documentation.
- Create a `PromiseKeeper` and add to static context.
- Handle global promise failures by re-thworing them in the run loop.
- Introduce hooks with functors and static types.
- Introduce promeses.
- SheduledSource to tick promise keeper.
- Use lifecycles to auto-add drains with data.

### Improvements
- Exceptions inherit from `std::runtime_error`.
- Make Drain and Source FD accessible to LoopManagers only.
- Quick access to full reference pages.

### Breaking changes
- All writes use flush instead of FDs.
- `Context` static methods to uppercase (lowercase for instance version).
- Implement `Buffer`s for drains buffering system.
- Move FD check to new `core.utility.net`.
- Refactor `Event` error handling with `std::exception_ptr`.
- Refactor `EventDrain` to support buffering and async flushes.
- Refactor `EventSource` to improve interface.
- Refactor `EventSourceManager` to `LoopManager`.
- Refactor `MessageIO::send` to use drains instead of fds.

0.0.4
-----
_Topic_: Start system configuration.

### New Features
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
_Topic_: First client-server interaction.

### New Features
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
_Topic_: Start command line client.

### New Features
- Command line client started.
- LUA utility wrapper classes.
- Manual event source.
- Node name from command line.
- Print binary version and exit.
- Public protocol started.
- Scheduled event source.
- Started cluster interface.
- Status definition and helpers.

### Improvements
- Node name used in event ids.

### Fixes
- Fixed daemon termination with Ctrl+C in console mode.
- Fixed undetected client disconnects.

0.0.1
-----
_Topic_: Event ids.

### New Features
- Event ids and correlation ids.
- Improved event handler registration at static initialisation time.
- Version header file.

0.0.0
-----
_Topic_: Core framework.

### New Features
- Core framework.
- Process orchestration and daemonisation.
