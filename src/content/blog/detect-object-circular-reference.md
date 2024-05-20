---
title: 检测对象是否存在循环引用
pubDate: 2024-05-20T08:21:10.485Z
tags: ["javascript"]
---

在使用 JSON.stringify() 的时候，如果对象存在循环引用，就会报错。利用这一点，我想到可以用来检测对象是否存在循环引用。代码实现如下：

```javascript
function hasCircularReference(obj) {
  try {
    JSON.stringify(obj);
    return false;
  } catch (e) {
    return e.message.indexOf("Converting circular structure to JSON") > -1;
  }
}
```

出于好奇，我在想是否可以手动实现一个用于检测循环引用的方法，在跟 GPT 沟通后，实现了如下代码：

```javascript
function hasCircularReference2(obj) {
  const seenObj = new Set(); // 存储已经访问过的对象引用

  function detect(obj) {
    if (seenObj.has(obj)) {
      // 判断是否访问过该对象，如果访问过则返回 true
      return true;
    }
    seenObj.add(obj); // 如果没有访问过该对象，则将其添加到集合中

    for (const key in obj) {
      if (obj.hasOwnProperty(key) && detect(obj[key])) {
        // 遍历判断对象属性是否包含循环引用，如果包含则返回 true
        return true;
      }
    }
    return false;
  }
  // 返回检测结果
  return detect(obj);
}
```
