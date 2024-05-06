---
title: Example Guide
description: A guide in my new Starlight docs site.
---

## Using the Standard Library

moonbitlang/core is always included.

```
fn main {
  // Examples accessible at the top-level namespace included in core
  let list: List[Int] = List::[]
  let array: Array[Int] = Array::[]
  let tuple: (Int, Int) = (1, 2); // Tuple
  let r: Ref[Int] = { val: 1 }

  // Examples that are included but accessed with a namespace
  let hm: @hashmap.HashMap[Int, Int] = @hashmap.HashMap::[]
  let vec: @vec.Vec[Int] = @vec.Vec::[]
  let set: @immutable_set.ImmutableSet[Int] = @immutable_set.ImmutableSet::[]
  let queue: @queue.Queue[Int] = @queue.Queue::[]
  let stack: @stack.Stack[Int] = @stack.Stack::[]
  let rand_int = @random.RandomInt::new(10);
}
```

A mutable array can be declared as @vec.Vec[T] and pushed to, then converted to an array by doing vec.to_list().to_array(). Is there no direct method to toArray?

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework

https://www.moonbitlang.com/blog/moonbitlang-core-opensource