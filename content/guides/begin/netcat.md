+++
categories = ["general"]
date = "2015-12-01T23:59:00+01:00"
tags = ["document"]
title = "Running a NetCat server"

+++

Introduction
------------
NetCat (`nc`) is a command line utility to send text over the network.
NetCat can also act as a server and send data to clients that connect to it.

In this example, `nc` is used to create a simple HTTP server that returns
`Hello from SnowFox!` for every page requested.


Service configuration
---------------------
The first step is to determine the configuration of this new service.
In the case of `nc` the configuration is composed exclusivly of
command line parameters.

We want to:

  * Enter server mode (`--listen`).
  * Respond to multiple requests (`--keep-open`).
  * Print a message to every user that connects (`--sh-exec`).
  * Listen on port `8080`.
  * Run on the local machine.

To do this on a command line run the following:
```bash
nc --listen --keep-open --sh-exec 'echo -e "HTTP/1.1 200 OK\r\n\r\nHello from SnowFox!"' 8080
```


Service definition
------------------
To run this server in SnowFox we need to define a service for it.
Instances of this server will be started with the provided configuration.

Below is the definition of the NetCat server service with comments on what
each bit of the configuration means:
```lua
-- Define some variables to use later when building the command line.
-- This sort of features is why LUA was selected for the configuration! :-)
HTTP_HEADER  = "HTTP/1.1 200 OK";
HTTP_BODY    = "Hello from SnowFox!";
HTTP_MESSAGE = HTTP_HEADER .. "\\r\\n\\r\\n" .. HTTP_BODY;

-- Define a new service with id examples.netcat.hello.
service "examples.netcat.hello" {
  -- Tell SnowFox that the service is a local service,
  -- i.e, it runs on the local machine.
  connector = "local",

  -- What program should be executed?
  -- This needs to be the full path to it.
  binary = "/usr/bin/nc",

  -- What arguments should be passed to it?
  -- For us this is the list in the previous section.
  arguments = {
    "--listen",
    "--keep-open",
    "--sh-exec", 'echo -e "' .. HTTP_MESSAGE .. '"',
    "8080"
  }
}
```

The above service definition must be save in a `.service` file in
the configuration repository.
This files must live under the `services` directory and the path
must be a prefix of the service identifier.

The following paths are all valid for this service id:

  * `services/examples/netcat/hello.service`
  * `services/examples/netcat.service`
  * `services/examples.service`


Starting the service
--------------------
Once the service is defined, commit the changes into your configuration
repository and [re]start SnowFox to reload the configuration for the new
service definition to be accessible.

Assuming that the JSON API daemon is running as shown in the [home page](/),
the following curl command will trigger a new instance to be started:
```bash
curl -XPUT http://localhost:1840/services/examples.netcat.hello
```

Check that the service is running:
```bash
curl http://localhost:8080
> Hello from SnowFox!
```
