+++
date = "2016-04-01T23:28:11+01:00"
force_menu = "ref"
title = "Daemon/Manager Protocol Reference"

+++

System Shutdown
---------------
The system shutdown can be initiated from the daemon by:

  * A user's sending `SIGTERM` to the daemon.
  * The manager subprocess terminating.
  * The spawner subprocess terminating.

In any of the above cases:

  * The daemon sends a `Message` with code `Message::Code::Shutdown`
    to the manager, if it is not dead.
  * The manager performs the shutdown actions and terminates.
  * The daemon detects that the manager terminated.
  * The daemon sends a `Message` with code `Message::Code::Shutdown`
    to the spawner, if it is not dead.
  * The spawner performs the shutdown actions and terminates.
  * The daemon terminates.
