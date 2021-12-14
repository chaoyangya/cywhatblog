---
title: "Loveit主题的一些美化设置"
date: 2021-10-21T16:08:45+08:00
draft: false
tags: ["Hugo","Loveit"]
categories: ["Hugo","Loveit"]
---

{{< admonition type=tip title="前景" open=true >}}
hugo的渲染速度"婶婶"(深深)的打动了我，于是决定从hexo迁移到hugo，迁移的帖子之后总结一下，先记录一下自己设置hugo下的Loveit主题的一些有意思的东西
{{< /admonition >}}


## LoveIt扩展Shortcodes

### 1.admonition

`admonition`比较常用，有12个样式，只需要更改对应的 `type` 就可以了，list如下：

### 2.用法：
```HTML 
{{< admonition type=tip title="This is a tip" open=false >}}
一个 **技巧** 横幅
{{< /admonition >}}
或者
{{< admonition tip "This is a tip" false >}}
一个 **技巧** 横幅
{{< /admonition >}}
```



### 3.示例

{{< admonition type=note title="注意" open=true >}}
type=note
{{< /admonition >}}

{{< admonition type=abstract title="摘要" open=true >}}
type=abstract
{{< /admonition >}}

{{< admonition type=info title="信息" open=true >}}
type=info
{{< /admonition >}}

{{< admonition type=tip title="技巧" open=true >}}
type=tip
{{< /admonition >}}

{{< admonition type=success title="成功" open=true >}}
type=success
{{< /admonition >}}

{{< admonition type=question title="问题" open=true >}}
type=question
{{< /admonition >}}

{{< admonition type=warning title="警告" open=true >}}
type=warning
{{< /admonition >}}

{{< admonition type=failure title="失败" open=true >}}
type=failure
{{< /admonition >}}

{{< admonition type=danger title="危险" open=true >}}
type=danger
{{< /admonition >}}

{{< admonition type=Bug title="Bug" open=true >}}
type=Bug
{{< /admonition >}}

{{< admonition type=example title="示例" open=true >}}
type=example
{{< /admonition >}}

{{< admonition type=quote title="引用" open=true >}}
type=quote
{{< /admonition >}}


