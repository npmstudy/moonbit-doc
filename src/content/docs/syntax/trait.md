---
title: Example Guide
description: A guide in my new Starlight docs site.
---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.


## new_trait.mbt

```
trait Serializer {
  serialize(Self) -> Bytes
}

impl Serializer for Int with serialize(self) {
  Bytes::from_array([
    self.land(0xFF),
    self.lsr(8).land(0xFF),
    self.lsr(16).land(0xFF),
    self.lsr(24).land(0xFF)
  ])
}

fn main {
  let bytes = (1 as Serializer).serialize()
}
```

https://gist.github.com/mizchi/d3ab781110814b6b46152c64ec4ad8b8

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
