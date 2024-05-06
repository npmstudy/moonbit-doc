---
title: Wasm Guide
description: A guide in my new Starlight docs site.
---

Moonbit的定位：

> Intelligent developer platform for Cloud and Edge using WASM.

这个定位的核心是基于WASM，为了让大家更容易理解Moonbit，这里需要介绍一下WASM。

## 背景

在业务需求越来越复杂的现在，前端的开发逻辑越来越复杂，相应的代码量随之变的越来越多。相应的，整个项目的起步的时间越来越长。在性能不好的电脑上，启动一个前端的项目甚至要花上十多秒。这些其实还好，说明前端越来越受到重视，越来越多的人开始进行前端的开发。

但是除了逻辑复杂、代码量大，还有另一个原因是 JavaScript 这门语言本身的缺陷，JavaScript 没有静态变量类型。这门解释型编程语言的作者 Brendan Eich，仓促的创造了这门如果被广泛使用的语言，以至于 JavaScript 的发展史甚至在某种层面上变成了填坑史。为什么说没有静态类型会降低效率。这会涉及到一些 JavaScript 引擎的一些知识。

所以为了解决这个问题，WebAssembly 的前身，asm.js 诞生了。asm.js 是一个 Javascript 的严格子集，合理合法的 asm.js 代码一定是合理合法的 JavaScript 代码，但是反之就不成立。同 WebAssembly 一样，asm.js 不是用来给各位用手 一行一行撸 的代码，asm.js 是一个 编译目标。它的可读性、可读性虽然比 WebAssembly 好，但是对于开发者来说，仍然是无法接受的。

无论 asm.js 对静态类型的问题做的再好，它始终逃不过要经过 Parser，要经过 ByteCode Compiler，而这两步是 JavaScript 代码在引擎执行过程当中消耗时间最多的两步。而 WebAssembly 不用经过这两步。这就是 WebAssembly 比 asm.js 更快的原因。

所以在 2015 年，我们迎来了 WebAssembly。WebAssembly 是经过编译器编译之后的代码，体积小、起步快。在语法上完全脱离 JavaScript，同时具有沙盒化的执行环境。WebAssembly 同样的强制静态类型，是 C/C++/Rust/Moonbit 的编译目标。

## Wasm

WebAssembly 是一种新的编码方式，可以在现代的 Web 浏览器中运行——它是一种低级的类汇编语言，具有紧凑的二进制格式，可以接近原生的性能运行，并为诸如 C/C++、C# 和 Rust 等语言提供编译目标，以便它们可以在 Web 上运行。它也被设计为可以与 JavaScript 共存，允许两者一起工作。

对于 Web 平台而言，WebAssembly 具有巨大的意义——它提供了一条使得以各种语言编写的代码都可以接近原生的速度在 Web 中运行的途径，使得以前无法在 Web 上运行的客户端应用程序得以在 Web 上运行。

WebAssembly 被设计为可以和 JavaScript 一起协同工作——通过使用 WebAssembly 的 JavaScript API，你可以把 WebAssembly 模块加载到 JavaScript 应用中并且在两者之间共享功能。这允许你在同一个应用中利用 WebAssembly 的性能和能力以及 JavaScript 的表达力和灵活性，即使你可能并不知道如何编写 WebAssembly 代码。

而且，更棒的是，这是由 [W3C WebAssembly 工作组](https://www.w3.org/wasm/)和[社区组](https://www.w3.org/community/webassembly/)开发的 Web 标准，并得到了来自各大主要浏览器厂商的积极参与。

## Why?



## Platform

Moonbit 和 WebAssembly 有两大主要用例：

- 构建完整应用——整个 Web 应用都基于 Moonbit 开发！
- 构建应用的组成部分——在现存的 JavaScript 前端中使用 Moonbit


## Further reading

- 更多内容，参考 https://developer.mozilla.org/zh-CN/docs/WebAssembly
