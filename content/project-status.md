+++
date = "2016-03-25T16:49:38Z"
title = "Project Status"
notoc = true

[menu]
  [menu.nav_left]
    identifier = "status"
    weight = 2
+++

{{% alert warning %}}
  **Early development warning!!!**
  Be aware that SnowFox is in its early development stages.

  **Do not use in production environments**.
{{% /alert %}}


Version number
--------------
The version number follows the rules of [Semantic Versioning](http://semver.org/)
with one difference: for versions below `1.0.0` the meaning is shifted by one and
there is no `PATCH`.

This is to clarify the, very useful, loose constraints on versions below `1.0.0`.
For these versions, when new features are added quickly and compatibility
breaks often, the `MAJOR.MINOR.PATCH` are as follows:

  * `MAJOR`: it is always `0`.
  * `MINOR`: represents a backward incompatible change.
  * `PATCH`: represents a backward compatible change (feature or bug fix).

### The public API
At the basis of semantic versioning there is a public API.
The version number changes based on changes to that.
For the purpose of versioning, the public API of SnowFox is composed of:

  * The [command line]({{< relref "references/cli.md" >}}) options.
  * The configuration format.
  * The [public protocol buffer]({{< relref "references/protobuf/public/protocol.md" >}}) API.
  * The plugin API.
  * The lifecycles steps.


Road map
--------

{{% bootstrap-table "table-striped" %}}

| Milestone estimate | Feature                    | Status      |
| ------------------ | -------------------------- | ----------- |
| 0.1.0              | Events refactoring         | done        |
| 0.1.1              | Metadata storage           | done        |
| 0.2.0              | Service start and registry | in progress |
| 0.2.1              | Service status and stop    | pending     |
| 0.3.0?             | Docs improvement           | pending     |
| 0.4.0?             | Metrics collection         | pending     |
| 0.5.0?             | Libevent + RPC framework   | pending     |
| 0.6.0?             | Config/context refactoring | pending     |
| 0.6.1?             | Cluster membership         | pending     |
| ??????             | TCP connection support     | pending     |
| ??????             | Client connects over tcp   | pending     |
| ??????             | Cluster support            | pending     |
| ??????             | `snow-fox-bootstrap`       | pending     |

{{% /bootstrap-table %}}

Next release
------------
The topic for the next release is: <b>basic service commands</b>.

This release cycle will be complete when service start, list,
stop, and status are implemented.

This will approximately be version `0.1.5`.

Change log
----------
Change logs ...

Boring for both authors and readers.
Except for that one time you need it!

The [change log]({{< relref "changelog.md" >}}) for SnowFox is an
itemised list of things that changed and the version it changed in.

{{% alert warning %}}
While the change log is as accurate as possible, it is
**not guaranteed to be complete**.  
If you need such guarantee you may have to scavenge the git logs.
{{% /alert %}}

Technical debt
--------------
A hated name for a useful concept: there are some things already that
need to change!

At first I tried to identify what needs to be changed and how to make it
better then the result needed to be made better again ...

Well it is decided now: progress must be made and where the problems
become clear and concrete they can be reasoned about and fixed.

The [tech log]({{< relref "techlog.md" >}}) lists the areas that
need work and why they need it.
