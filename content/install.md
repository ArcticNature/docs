+++
date = "2016-03-20T20:46:01Z"
title = "Install"

[menu]
  [menu.nav_left]
    identifier = "install"
    weight = 1
+++

{{% alert warning %}}
  **Early development warning!!!**
  Be aware that SnowFox is in its early development stages.

  **Do not use in production environments**.
{{% /alert %}}

{{% draft %}}
{{% alert info %}}
Looking to get up and running fast so you can try things out?
**Checkout the [Quick Start]({{< relref "quick-start.md" >}}) guide!**
{{% /alert %}}
{{% /draft %}}


Overview
--------
SnowFox aims to be a fully featured, distributed, service manager.
There are (at least) two compilactions with this:

  * What is fully featured?
    You will need different features to me and always adding new ones
    may not be an option.
  * If all features are implemented from scratch inside SnowFox itself
    the codebase would become so complex that it would be impossible to
    maintain and evolve (and it would take so much time).

So SnowFox has a different approach to most features: if there is an open
source solution that already implements what we need, integrate with it
instead of rebuilding it.

**As a result installing SnowFox is not just about SnowFox.**
Some systems (like a KeyValue storage for Metadata) are required to run
SnowFox while others (like a DNS server for services) are required only for
some features and SnowFox will be able to start and function without them.

### Steps
These are the steps required to install and run a SnowFox cluster:

  1. Install a metadata store (TODO).
  2. Install SnowFox following the instructions below.
  3. Create a configuration repository (clone and customise the default one:
     https://github.com/ArcticNature/default-config )
  4. Start SnowFox.


Install from source
-------------------
At this time, the only install method is through direct
source code compilation.

SnowFox uses several tools and languages which means there are
a few pre-requisites to compiling the sources.

But fear not!
The custom-built build tool for SnowFox makes it
easy to compile the entire project with little effort.

This guide will go through the installation and compilation
steps on Fedora 23.
Be aware that this is for gidance only and that your mileage may vary.

### Installing compile-time dependencies
Install the compilers and build tools used by SnowFox's build system:
{{< highlight bash >}}
sudo dnf install cmake gcc-c++ git make openssl-devel protobuf-compiler protobuf-devel
{{< /highlight >}}

Install the latest version of Node.js, NPM, and Grunt:
{{< highlight bash >}}
curl --silent --location https://rpm.nodesource.com/setup_5.x | sudo bash -
sudo dnf install nodejs
sudo npm install grunt-cli
{{< /highlight >}}

### Compiling the code
Pull SnowFox's source code and compile it:
{{< highlight bash >}}
mkdir -p /tmp/snow-fox-source
cd /tmp/snow-fox-source

git clone https://github.com/ArcticNature/snow-fox.git --recursive
cd snow-fox

npm install
grunt distribute
{{< /highlight >}}

### Installing the result
The output of a distribution build is stored in `out/packages`.
For convenience, let us put the compiled distribution in `/opt`:
{{< highlight bash >}}
sudo mkdir -p /opt
sudo cp --recursive --preserve=all out/packages/snow-fox /opt/
sudo useradd --home-dir /opt/snow-fox --shell /bin/false --system --user-group snow-fox
sudo chown -R snow-fox:snow-fox /opt/snow-fox
{{< /highlight >}}

{{% alert success %}}
  **Congratulations!**
  SnowFox is now installed in `/opt/snow-fox/bin/snow-fox`.

  Check out the `Quick Start`,
  `Guides and Tutorials`, and
  [References]({{< relref "references.md" >}}) sections!
{{% /alert %}}
