---
title: Creating and Using a New Package
description: A guide in my new Starlight docs site.
---

## Creating a New Module
To create a new module, enter the moon new command in the terminal, and you will see the module creation wizard. By using all the default values, you can create a new module named hello in the my-project directory.

```sh
$ moon new
Enter the path to create the project (. for current directory): my-project
Select the create mode: exec
Enter your username: username
Enter your project name: hello
Enter your license: Apache-2.0
Created my-project
```

## Creating and Using a New Package

First, create a new directory named fib under lib:

```sh
$ mkdir lib/fib
```

Now, you can create new files under lib/fib:

a.mbt:

```
pub fn fib(n : Int) -> Int {
  match n {
    0 => 0
    1 => 1
    _ => fib(n - 1) + fib(n - 2)
  }
}
```

b.mbt:

```
pub fn fib2(num : Int) -> Int {
  fn aux(n, acc1, acc2) {
    match n {
      0 => acc1
      1 => acc2
      _ => aux(n - 1, acc2, acc1 + acc2)
    }
  }

  aux(num, 0, 1)
}
```

moon.pkg.json:

```
{}
```

After creating these files, your directory structure should look like this:

```
my-project
├── README.md
├── lib
│   ├── fib
│   │   ├── a.mbt
│   │   ├── b.mbt
│   │   └── moon.pkg.json
│   ├── hello.mbt
│   ├── hello_test.mbt
│   └── moon.pkg.json
├── main
│   ├── main.mbt
│   └── moon.pkg.json
└── moon.mod.json
```

In the main/moon.pkg.json file, import the username/hello/lib/fib package and customize its alias to my_awesome_fibonacci:

```
{
  "is_main": true,
  "import": [
    "username/hello/lib",
    {
      "path": "username/hello/lib/fib",
      "alias": "my_awesome_fibonacci"
    }
  ]
}
```

This line imports the fib package, which is part of the lib package in the hello module. After doing this, you can use the fib package in main/main.mbt. Replace the file content of main/main.mbt to:

```
fn init {
  let a = @my_awesome_fibonacci.fib(10)
  let b = @my_awesome_fibonacci.fib2(11)
  println("fib(10) = \(a), fib(11) = \(b)")

  println(@lib.hello())
}
```

To execute your program, specify the path to the main package:

```
$ moon run main
fib(10) = 55, fib(11) = 89
Hello, world!
```

## Package Importing
In the MoonBit's build system, a module's name is used to reference its internal packages. To import the lib package in main/main.mbt, you need to specify it in main/moon.pkg.json:

```
{
  "is_main": true,
  "import": [
    "username/hello/lib"
  ]
}
```

Here, username/hello/lib specifies importing the username/hello/lib package from the username/hello module, so you can use @lib.hello() in main/main.mbt.

Note that the package name imported in main/moon.pkg.json is username/hello/lib, and @lib is used to refer to this package in main/main.mbt. The import here actually generates a default alias for the package name username/hello/lib. In the following sections, you will learn how to customize the alias for a package.

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
