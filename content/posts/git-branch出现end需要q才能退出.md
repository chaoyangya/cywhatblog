---
title: git branch出现end需要q才能退出
date: 2021-04-01 17:54:22
draft: false
tags: ["Git"]
categories: ["Git"]
---

git 进入了编辑模式

用以下命令即可解决：

```bash
$ git config --global core.pager mor
```
