---
title: "TypeScript 中 any 和 unknown 的区别"
pubDate: 2023-04-07T15:06:01+08:00
tags: ["TypeScript", "any", "unknown"]
---

本文简单记录一下 `any` 和 `unknown` 的区别。

- 相同点：`any` 和 `unknown` 可以是任何类的父类，即任何类型的变量都可以赋值给 `any` 类型的变量或者 `unknown` 类型的变量，例：

  ```typescript
  // any
  let anyVal: any;

  anyVal = 1;
  anyVal = "hello";
  anyVal = true;
  anyVal = null;
  anyVal = undefined;
  anyVal = [];
  anyVal = {};
  anyVal = function () {};

  // unknown
  let unknownVal: unknown;

  unknownVal = 1;
  unknownVal = "hello";
  unknownVal = true;
  unknownVal = null;
  unknownVal = undefined;
  unknownVal = [];
  unknownVal = {};
  unknownVal = function () {};
  ```

- 不同点

  1. `any` 可以是任何类的子类，即 `any` 类型的变量可以赋值给其他类型的变量，但是 `unknown` 不行；
  2. `any` 类型的变量可以获取任意名称的属性或者任意名称的方法，但 `unknown` 不行

  ```typescript
  // any 类型的变量可以赋值给任意类型的变量
  let testAny: any = "";

  let num: number = testAny;
  let str: string = testAny;
  let bol: boolean = testAny;
  let nul: null = testAny;
  let und: undefined = testAny;
  let arr: Array<any> = testAny;
  let obj: object = testAny;

  // unknown 类型的变量不能赋值给别的类型的变量，以上赋值操作均不支持

  // any 类型的变量，获取任意属性或者方法都不会报错，但是 unknown 不行
  const anyVal: any = 1;

  anyVal.length; // 即使 anyVal 是数字 1，也可以获取 length 属性不报错
  anyVal.testFn(); // 没有 testFn 方法也可以调用不报错（指类型检查通过）
  ```

关于应用场景就不好描述了，知道上面的区别大概就知道什么时候该用什么了。
