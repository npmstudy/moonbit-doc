---
title: VS Code plugin
description: MoonBit Language plugin in Visual Studio Code
---

You can install it from the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=moonbit.moonbit-lang). This plugin provides a rich development environment for MoonBit, including functionalities like syntax highlighting, code completion, and more.

## Adding Tests

Let's add some tests to verify our fib implementation. Add the following content in lib/fib/a.mbt:

```
lib/fib/a.mbt

fn assert_eq[T: Show + Eq](lhs: T, rhs: T) -> Unit {
  if lhs != rhs {
    abort("assert_eq failed.\n    lhs: \(lhs)\n    rhs: \(rhs)")
  }
}

test {
  assert_eq(fib(1), 1)
  assert_eq(fib(2), 1)
  assert_eq(fib(3), 2)
  assert_eq(fib(4), 3)
  assert_eq(fib(5), 5)
}
```

This code tests the first five terms of the Fibonacci sequence. test { ... } defines an inline test block. The code inside an inline test block is executed in test mode.

Inline test blocks are discarded in non-test compilation modes (moon build and moon run), so they won't cause the generated code size to bloat.


## Stand-alone test files

Besides inline tests, MoonBit also supports stand-alone test files. Source files ending in _test.mbt are considered stand-alone test files. They will be included in test mode only. You can write inline tests and test utilities in these stand-alone test files. For example, inside the lib/fib directory, create a file named fib_test.mbt and paste the following code:

lib/fib/fib_test.mbt

```rust
test {
  assert_eq(fib(1), 1)
  assert_eq(fib2(2), 1)
  assert_eq(fib(3), 2)
  assert_eq(fib2(4), 3)
  assert_eq(fib(5), 5)
}
```

Finally, use the moon test command, which scans the entire project, identifies, and runs all inline tests as well as files ending with _test.mbt. If everything is normal, you will see:

```sh
$ moon test
test lib/fib ... ok
test lib ... ok
fib(10) = 55, fib(11) = 89
Hello, world!
test main ... ok
```

Note that main/main.mbt:init is also executed here, and we will improve the issue of testing with package initialization functions in the future.

## Further reading

- Read [Writing tests with joy: MoonBit expect testing](https://www.moonbitlang.com/blog/expect-testing)
