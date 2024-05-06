---
title: Example Guide
description: A guide in my new Starlight docs site.
---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.

## Global Variables

Declare Ref[T] type at the top level.

```
let count: Ref[Int] = { val: 0 }

fn increment() -> Int {
  count.val = count.val + 1
  count.val
}
```

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
