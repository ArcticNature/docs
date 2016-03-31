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

<!--
{{% alert info %}}
Looking to get up and running fast so you can try things out?
**Checkout the [Quick Start]({#{< relref "quick-start.md" >}}) guide!**
{{% /alert %}}
-->


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
