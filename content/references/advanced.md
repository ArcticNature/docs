+++
date = "2016-10-13T14:52:49+01:00"
title = "Advanced Topics"

[menu]
  [menu.nav_right]
    parent = "ref"
    weight = 3
+++

These pages discuss the details of how parts of SnowFox work.
Mostly this refers to how features should work so that their
implementaion can be defined and focused.

The other use for these pages is details that are useful to
components authors, advanced users, or adveanced configurations.

## E
### [The Event System]({{< relref "references/advanced/events.md" >}})
This page describes the event interface, the event manager,
and the run loop.

{{% draft %}}
## P
### Process forking model.
A look at how the SnowFox process works.
{{% /draft %}}

## R
{{% draft %}}
### Remote Procedure calls
As SnowFox is a distributed, asynchronous, software it makes extensive use of
Remote Procedure Calls (RPCs).

The RPC framework provides a standard way to exchange messages over a variety
of protocols (unix socket, HTTP, NATS, ...) transparently.
{{% /draft %}}

### [Representing status]({{< relref "references/advanced/status.md" >}})
This page describes how status of system and units alike is
represented in SnowFox and exposed by the API.
