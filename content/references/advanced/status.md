+++
date = "2016-04-09T09:38:16+01:00"
force_menu = "ref"
title = "Representing status"

references = ["advanced"]
references_weight = 0

type = "index"
layout = "summary"
ref_name = "status"
+++

SnowFox keeps track not only of itself but also the services it
runs, depends on, or other items defined by extensions.
To avoid users/admins insanity, all these status information is
presented in a consistent way.

Status information is formed of two bits:

  * A human readable message with the reason for the status.
  * A traffic light indicator:
    * Red: the unit is confirmed to be in an undesired state
      (failed process, invalid configuration, ...).
    * Yellow: the unit is not in the desired state but it may be still be
    * converging to it (system starting, configuration loading, ...).
    * Green: the unit is in the desired state.

This format allows to quickly check the overall system and to derive
aggregate status overviews while keeping the details needed to react
to issue in the system itself.
