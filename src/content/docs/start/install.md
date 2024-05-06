---
title: Install Guide
description: A guide in my new Starlight docs site.
---

Ready to install Moonbit? Follow this guide to using the create Moonbit CLI to get started.

## Prerequisites

- OS - Apple Silicon MacOS or Ubuntu or Windows.
- Text editor - We recommend VS Code with our Official Moonbit extension.
- Terminal - Moonbit is accessed through its command-line interface (CLI).

## Install

Apple Silicon MacOS

```
/bin/bash -c "$(curl -fsSL https://cli.moonbitlang.com/mac_m1_moon_setup.sh)"
```

Intel MacOS

```
/bin/bash -c "$(curl -fsSL https://cli.moonbitlang.com/mac_intel_moon_setup.sh)"
```

x86-64 Ubuntu 20.04

```
/bin/bash -c "$(curl -fsSL https://cli.moonbitlang.com/ubuntu_x86_64_moon_setup.sh)"
```

Windows

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser; irm https://cli.moonbitlang.com/windows_moon_setup.ps1 | iex
```

Use moon help to view the usage instructions.

```
$ moon help
Moonbit's build system

Usage: moon <COMMAND>

Commands:
  build     Build the current package
  check     Check the current package, but don't build object files
  run       Run WebAssembly module
  clean     Remove the target directory
  new       Create a new moonbit package
  bench     Generate build matrix for benchmarking
  fmt       Format moonbit
  version   Print version info and exit
  test      Run the tests
  login     Log in to your account
  register  Register an account on mooncakes.io
  publish   Publish the current package
  add       Add a new dependency
  remove    Remove a dependency
  tree      Display the dependency tree
  update    Update index
  doc       Generate documentation
  install   Install dependencies
  help      Print this message or the help of the given subcommand(s)

Options:
  -h, --help  Print help
```

## Try online

MoonBit is an end-to-end programming language toolchain for cloud and edge computing using WebAssembly. The IDE environment is available at https://try.moonbitlang.com without any installation; it does not rely on any server either.



