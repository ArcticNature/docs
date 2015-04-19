Supported repository
====================
This is a list of repositories that are supported and in which mode they are.

  >! Please keep in mind that this is a work in progress feature.
  >! While the system is build to use repositories, no version control system
  >! is supported at this stage.
  >! Debug mode can use a plain directory as if it was a repository
  >! but that is for development purposes and should not be the
  >! correct approach to storing the configuration.


Git
---
[Git](http://git-scm.com/) is the target version control system
for SnowFox.
It will be the first system officially supported.


Plain file system
-----------------
While using the plain file system goes against one of the core ideas of
SnowFox, it is helpful for development purposes and is faster to "implement".
When SnowFox is built in debug mode, a file repository component
will be enabled.

The file repository is essentially a way to abstract access to the file
system through an interface that is designed for Version Control Systems.
