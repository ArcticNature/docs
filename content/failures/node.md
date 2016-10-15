+++
date = "2016-10-06T19:44:49+01:00"
title = "Individual Node Failures"
description = """
This section relates to failures limited to the host SnowFox runs on.
It covers how the node can recover from these failures while the system
as a whole may need to proceed further and independently to recover from
a lost node.
"""

pagesets = ["failures"]

[menu]
  [menu.nav_right]
    parent = "fail"
    weight = 0
+++

This section relates to failures limited to the host SnowFox runs on.
It covers how the node can recover from these failures while the system
as a whole may need to proceed further and independently to recover from
a lost node.
<!--more-->


SnowFox's process death
-----------------------
{{< header size="4" text="Component" >}}
  <span class="label label-primary">Daemon</span>,
  <span class="label label-primary">Manager</span>, or
  <span class="label label-primary">Spawner</span>
  process.
{{< /header >}}

{{< header size="4" text="Root cause" >}}
A SnowFox process is dead or terminated
(may it be bug, kernel, or human request).
{{< /header >}}

{{< header size="4" text="Side effects" />}}

  * Clients connected to the node will be disconnected.
  * Cluster loses access to the node.
  * Node monitoring and management through SnowFox is unavailable.
  * Pending requests will time out.
  * The cluster may react assuming the entire host failed.

{{< header size="4" text="Mitigation" />}}

  * Processes started by SnowFox are not tied to the manager.  
    As a result they will not be impacted by the failure.
  * Once the node comes back online it will resume monitoring
    the processes and update its internal status.


Internal errors
---------------
{{< header size="4" text="Component" >}}
  <span class="label label-primary">Any</span>
{{< /header >}}

{{< header size="4" text="Root cause" />}}

  * Bugs in the code.
  * Unexpected behaviour from other components.
  * User error.
  * Others ...

{{< header size="4" text="Side effects" />}}

  * Features may not work as expected.
  * Most errors are ignored if not explicitly handled to prevent node failures.
  * Processes may not be started or terminated.
  * Requests may never return (neither successfully nor unsuccessfully).

{{< header size="4" text="Mitigation" />}}

  * Timeouts should be used to protected against missed events from components.
  * Retries and timers should be used to provide **eventual consistency**.


Local service failure
---------------------
{{< header size="4" text="Component" >}}
  <a href="{{< relref "references/glossary.md" >}}#agent">
    <span class="label label-primary">Agents</span>
  </a>
{{< /header >}}

{{< header size="4" text="Root cause" />}}

  * Bug in the agent.
  * Unexpected response from the agent.
  * User or kernel termination of the agent.

{{< header size="4" text="Side effects" />}}

  * Features may become unavailable.
  * Requests may timeout.

{{< header size="4" text="Mitigation" />}}

  * Timeouts should be used to protected against missed events from components.
  * Retries and timers should be used to provide **eventual consistency**.
