+++
date = "2016-05-23T22:06:59+01:00"
force_menu = "ref"
title = "LUA client API"

references = ["lua"]
references_weight = 1
+++

LUA interfaces available in the `snow-fox-client`.
<!--more-->


Global names
------------
The following names are available in the global scope.

### `clear()`
Clears the terminal window and show the promp on the top line.

### `pprint(value)`
Prints the `value` argument.
If `value` is a LUA table, `pprint` recursively prints the keys
and their values.

### `print(...)`
Prints the given arguments, separating them with a `\t` (TAB).


The `client` object
-------------------
Commands that interact with the client are availale through the
`client` global object.

### `client:exit()`
Causes the client to exit cleanly.

### `client:version()`
Returns a LUA table with the client version information.
The table has the following fields:

{{% bootstrap-table "table-striped" %}}

| Field    | Type   | Decription       | Example |
| -------- | ------ | ---------------- | ------- |
| `number` | String | Client's SemVer  | `0.0.3` |
| `hash`   | String | Git hash | `ece936dd1f349fd9d0b31dbb9098cb204e5e8ff5` |
| `taint`  | String | Git state at build time | `git index tainted` |

{{% /bootstrap-table %}}


The `node` object
-----------------
`snow-fox-client` connects to a `snow-fox` node at start time.
The `node` global object allows to interact with the specific node
connected at start up.

### `node:status(callback[, details])`
Requests the status of the node.

When the node returns the status information, the `callback` is invoked
with the result converted into a LUA table.

If the optional `details` argument is set to `true` (defaults to `false`)
then the node includes detailed information about itself.
