First steps
===========
This introductory guide assumes that SnowFox is installed.
Currently the only installation method is
[direct source compilation](compile.md).


Configuration Repository
------------------------
The first step to use SnowFox is to create a repository
to store your configuration and service definitions.

At any point in time SnowFox keeps track of the current
version of the repository in use.
Whenever you need to update a configuration for SnowFox or a service
started by it you should make it to your working copy of the repository
and then commit it.
Once the change is committed it can be pulled and applied by SnowFox.

For more information and a list of supported repositories
see [Configuration repository](repo.md).

    >! Warning: premature feature.
    >! The repository support described above is a work in progress.
    >! Currently no version control systems (git, svn, ...) are supported
    >! and the configuration is loaded from a directory.
    >! This directory as repository feature is available only in the
    >! debug version of the program.

For this quick startup the default repository should be more then enough
to start with.
It will provide the default configuration and one service for the JSON api
server.


Running for the first time
--------------------------
Before diving into configuring the system to your needs it is a good idea
to run it once with the default settings to get used to it.
It is possible to run SnowFox in console mode, which is helpful to see
what is going on with the system and to quickly stop it.

Assuming that the default-repo directory from the source code is found
in `/tmp/snow-fox-repo/` the following command will start the core server:

    snow-fox-daenon --nodaemonise --dir --repo_path=/tmp/snow-fox-repo

Regardless of the configuration the daemon will handle the following signals:
  * INIT and TERM: stops the daemon and cleanly exits.
  * USR1: prints the current state of the system to the console.
  * USR2: reloads the configuration for the deamon without restarting.

Before moving on check the state of the daemon:

    SFPID=$(pgrep snow-fox | tail -n1)
    kill -USR1 ${SFPID}

That should result in the following being printed on the daemon condole:

    {
      "status": {
        "code": 4,
        "message": "Up and running",
        "start-time": 1423421939
      },
      "version": {
        "build-date": "2015-02-08 18:58:01",
        "snow-fox-daemon": "0.0.0-415a7ed",
        "config": "not-applicable"
      }
    }

Once you verified that the deamon is up and running you can send more commands
through other interfaces (as of now only a TCP interface is available).
With this default configuration SnowFox excepts commands over a TCP channel
and you should see a line similar to the following on your console:
`Listening for TCP events on 0.0.0.0:2340`.

To send commands over TCP you should use the JSON API.
This API is provided by a Node.JS server which runs as a separate process
to prevent interference with the core system.
On the plus side running it is easy:

    cd /path/to/snow-fox-json/dist
    npm install
    node main.js

You can check the state of the daemon through the JSON API by
browsing `http://localhost:2033/api/status`.


Starting services
-----------------
Now that the system is up and ready you can start running services.
You can do so through the JSON API by hitting the service endpoint.

The API offers endpoints of the form
`http://localhost:2033/api/service/<service>/<action>` where service is a
service identifier and the action will determine what to do with it.

Services are made available through configuration files in the repository.
The default repository provides an example service definition at
`repo/services/infra/snow-fox/json.service`.

This service identifier is "infra.snow-fox.json".
This identifier relates to the path within the repository as follows:

  1) Dots separate hierarchical groups, which map to directories.
  2) The last group is mapped to a file with `.service` extension.
  3) When an ID is used but is not loaded in the system it is looked up
     in the repository. If a file for the exact identifier is not found the
     last group is ignored and a file for the new identifier is looked up.
     Once a file is located and loaded the original identifier is used
     when performing any action on the service.

For the example above you can start another instance of the
JSON API server on port 1504 by browsing
`http://localhost:2033/api/service/infra.snow-fox.json/start`.
After which `http://localhost:2033/api/service/infra.snow-fox.json` can
be visited to see the current state of the service.


What to do next
---------------
Now it is time to experiment with the system and adapt it to your needs.
As the project is in its very early stages there is not much more to do
than defining new services but you can always look out for new features
and many, *many*, stability improvements.

