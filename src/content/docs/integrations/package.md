---
title: Getting Start
description: A guide in my new Starlight docs site.
---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.

## Working with Packages
Our username/hello module contains two packages: lib and main.

The lib package contains hello.mbt and hello_test.mbt files:

hello.mbt

```
pub fn hello() -> String {
    "Hello, world!"
}
```

hello_test.mbt

```
test "hello" {
  if hello() != "Hello, world!" {
    abort("")
  }
}
```

The main package contains a main.mbt file:

```
fn init {
  println(@lib.hello())
}
```

To execute the program, specify the path to the main package in the moon run command:

```
$ moon run ./main
Hello, world!
```

You can also omit ./

```
$ moon run main
Hello, world!
```

## Understanding the Module Directory Structure

After creating the new module, your directory structure should resemble the following:

```
my-project
├── README.md
├── lib
│   ├── hello.mbt
│   ├── hello_test.mbt
│   └── moon.pkg.json
├── main
│   ├── main.mbt
│   └── moon.pkg.json
└── moon.mod.json
```

Here's a brief explanation of the directory structure:

lib and main directories: These are the packages within the module. Each package can contain multiple .mbt files, which are the source code files for the MoonBit language. However, regardless of how many .mbt files a package has, they all share a common moon.pkg.json file. lib/*_test.mbt are separate test files in the lib package, where private members of the lib package can be accessed directly. These files are only included in the compilation in test mode, allowing for inline tests and utility functions for testing purposes to be written within these separate test files.

moon.pkg.json is package descriptor. It defines the properties of the package, such as whether it is the main package and the packages it imports.

main/moon.pkg.json:

```
{
  "is_main": true,
  "import": [
    "username/hello/lib"
  ]
}
```

Here, "is_main: true" declares that the package needs to be linked by the build system into a wasm file.

lib/moon.pkg.json:

```
{}
```

This file is empty. Its purpose is simply to inform the build system that this folder is a package.

moon.mod.json is used to identify a directory as a MoonBit module. It contains the module's name:

```
{
  "name": "hello"
}
```

## Further reading

- Read [intro to mooncakes](https://www.moonbitlang.com/blog/intro-to-mooncakes) in the mooncakes framework
