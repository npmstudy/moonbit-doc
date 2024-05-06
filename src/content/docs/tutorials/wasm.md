---
title: WebAssembly Guide
description: A guide in my new Starlight docs site.
---

## 构建我们的 WebAssembly npm 包

万事俱备，来创建一个新的 Moonbit 包吧。打开你用来存放你私人项目的目录，做这些事：

## 来写点 Moonbit 代码吧！

让我们在 src/lib.rs 写一些代码替换掉原来的：

这就是我们这个 Rust 项目的内容。它有三个主要部分，让我们按顺序来讲。这里将会给出一个缺少部分细节的高级说明；如果想要了解更多 Rust 知识，请查看在线书籍 The Rust Programming Language。

## 使用 wasm-bindgen 在 Rust 与 JavaScript 之间通信

第一行就像在说“哇 Rust，我们在用一个叫做 wasm_bindgen 的库”。在 Rust 当中，库被称为“crates”，因为我们使用的是一个外部库，所以有 "extern"。

明白了吗？ Cargo ships crates.

第三行包括了一个将库中的代码引入到你的代码中的使用命令。在这个情况下，将会引入 wasm_bindgen::prelude 的全部模块。我们将在下一节中使用这些内容。

在我们开始下一节之前，我们将讲一讲 wasm-bindgen。

wasm-pack 使用另一个工具 wasm-bindgen 来提供 JavaScript 和 Rust 类型之间的桥梁。它允许 JavaScript 使用字符串调用 Rust API，或调用 Rust 函数来捕获 JavaScript 异常。

我们将在我们的包中使用 wasm-bindgen 的功能。事实上，这是下一节的内容！


## 在 Rust 中调用来自 JavaScript 的外部函数


## 编写能够在 JavaScript 中调用的 Moonbit 函数


## 把我们的代码编译到 WebAssembly


## 构建包

把我们的包发布到 npm

## 在网站上使用我们的包

让我们建立一个使用我们包的网站！人们通过各种打包工具使用 npm 包，在本教程中，我们将使用 webpack。它比其他某些打包工具稍微复杂一点，但展示了更实际的用法。

让我们离开pkg目录，并创建一个新目录site，尝试以下操作：

```
cd ../..
mkdir site
cd site
```

创建一个新文件 package.json，然后输入如下代码：




## Further reading

本教程到此结束。希望你觉得它有用。

在这个领域，有很多工作正在推进当中。如果你希望它变得更好，可以参阅 Webassembly 工作组。

https://developer.mozilla.org/zh-CN/docs/WebAssembly/Rust_to_Wasm#%E5%9C%A8%E7%BD%91%E7%AB%99%E4%B8%8A%E4%BD%BF%E7%94%A8%E6%88%91%E4%BB%AC%E7%9A%84%E5%8C%85