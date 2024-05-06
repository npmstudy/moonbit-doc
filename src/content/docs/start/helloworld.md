


## Running the main Function

When "is_main": true is defined in <dir>/moon.pkg.json, the main function of that module can be called with moon run <dir>.

```
fn main {
  println("hello")
}
```

In moonbit, you usually need to explicitly state the return type of a function, but this is the only time it's exempted.

## Running Tests + Result Type

You can describe test cases with test {}. Also, this implicitly recognizes as a Result type block, allowing you to use the ? syntax.

```
test {
  @assertion.assert_eq(1 , 1)?
}

// with test name
test "1=1" {
  @assertion.assert_eq(1 , 1)?
}
```

This can be run by executing moon test in a directory with moon.mod.json. However, currently, there is no moon test --filter or similar, so you need to comment out each one if you want to exclude execution.

Functions that return built-in Result types can be used like Rust outside of the test block.

```
fn test_result(x: Int) -> Result[Int, String] {
  @assertion.assert_eq(1, 1)?
  if x > 5 {
    Err("x is too big".to_string())
  } else {
    Ok(x)
  }
}
```

Option[T] is also available, and like Rust, it can be unwrapped with ?.

One problem I've had is that runtime errors from .unwrap are not supported by stack traces, and no more information is available once an unwrap error is thrown. It's better not to use it too much.

```
fn test_result(x: Int) -> Result[Int, String] {
  let x: Result[Int, Int] = Err(1)
  let _ = x.unwrap() // This loses the stack trace here
  Ok(1)
}
```