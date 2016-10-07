+++
date = "2016-10-06T19:41:12+01:00"
title = "Failure scenarios"

[menu]
  [menu.nav_right]
    identifier = "fail"
    weight = 1
+++

SnowFox is a complex system that interacts with other
more or less complex systems.

This means that there are several possible ways for individual
components, systems, and the overall infrastructure will fail.
Some of these failures are going to be common (process restart,
server reboot, ...) some of them less frequent (network partitions).

All of them must be understood to be dealt with and often users
must understand what the failure scenarios are and how the software
deals with them to avoid surprises when they happen.

{{< page-set failures >}}
