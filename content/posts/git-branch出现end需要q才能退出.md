---
title: git branch出现end需要q才能退出
date: 2021-04-01 17:54:22
draft: false
tags: ["Git"]
categories: ["Git"]
---

### 前景：
在查看`git branch`分支时，需要q才能退出出现

### 原因
进入了编辑模式


### 解决

```bash
$ git config --global core.pager mor
```
