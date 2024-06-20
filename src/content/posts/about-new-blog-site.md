---
title: 新开发的博客站点，SEO 这就 100 分了？
pubDate: 2024-06-20T04:46:21.149
description: 使用 Astro 新开发的博客站点，SEO 测试满分了
---

昨天晚上心血来潮，把这个新博客部分重构优化了一下，顺便整了一下 SEO。部署之后想着测试一下性能，就用谷歌浏览器自带的 `lighthouse` 跑了一遍测试，结果出乎意料地好，请看下图：

![Snipaste_2024-06-19_23-46-40](https://img.jyan.wang/2024/Snipaste_2024-06-19_23-46-40.png)

右边的显示结果全绿，且分数都挺高的，尤其是 SEO 都满分了。这测试的还是 Mobile 端结果，我还没有优化移动端呢。然后今天我又跑了一遍桌面端测试，结果如下：

![Snipaste_2024-06-20_13-11-18](https://img.jyan.wang/2024/Snipaste_2024-06-20_13-11-18.png)

嘿嘿，分数更高一点，两个满分了。为此我先小小地嘚瑟了一下，以为是自己写的一手好代码。冷静下来后，我想更多的原因还是得益于 Astro 这个框架的优化，你就正常用这个框架开发网站，性能应该都不会很差。关于选择Astro框架的原因，可以看官方文档的自夸：<a href="https://docs.astro.build/zh-cn/concepts/why-astro/#_top" target="_blank">为什么选择 Astro?</a>

## 关于SEO优化

SEO 这块我其实不是很了解，目前只做了下面这些优化：

1. 最基础的就是网页头中的`<meta> ` 标签该写上的都写上，且每一篇文章都是独立的数据。做法很简单，我设计网站有一个全局的 `Layout` 布局组件，渲染文章页时，将文章元数据传递到布局组件，以展示各 `meat` 标签数据。
2. 生成站点地图，并使用 `link` 标签引入到网页头，框架提供的方案：<a href="https://docs.astro.build/zh-cn/guides/integrations-guide/sitemap/" target="_blank">@astrojs/sitemap</a>。
3. 生成 robots.txt 文件放置网站根目录，优化搜索引擎爬虫抓取。

可以看到我做的很有限，但是收益还不错，这都得益于框架的优化。后面我会抽时间再做些优化，相信可以将分数再提一提。
