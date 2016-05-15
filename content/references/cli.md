+++
date = "2016-03-25T16:51:30Z"
force_menu = "ref"
title = "Command Line Reference"

type = "index"
layout = "summary"
ref_name = "cli"

+++

SnowFox is built out of many binareis and tools.
These all have their own command line parameters and options.


Choosing a parser
-----------------
SnowFox allows the user to select which parser will be used to
process command line arguments.
This is done to allow flexibility for the needs of the future
focusing on the needs of the now and supporting backward compatibility.

To accomplish this a special `--parser` option is available.
Because this is processed before a parser for the command line is
selected there are a few restrictions on this options:

  * It must be the first option given.
  * It must be in the format `--parser=PARSER`.
  * The `PARSER` must be one of the available parsers.

Some examples:

  * `snow-fox --parser gflags` is **not valid** (there is no `=`).
  * `snow-fox --user snow-fox --parser=gflags` is **not valid** (not the first argument).
  * `snow-fox --parser=gflags --user snow-fox` is **valid**!

### Supported parsers
At the time, only one parser is supported: the `gflags` parser.

### Default parser
If the `--parser=PARSER` option is not specified the default parser is `gflags`.

This documentation presents the arguments for the default parser.
When an option has a different format for other parsers, this will
be indicated in the detailed description of the option.
If an option is not available in all parsers, this will be noted
in the detailed description too.


Binaries
--------
This section lists all the command line tools available to use
and the available options:
