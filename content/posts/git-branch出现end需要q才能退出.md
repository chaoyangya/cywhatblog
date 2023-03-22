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
这是 git 2.16以后版本的默认行为.
如果不想分页输出可以设置:



### 解决

```bash
git config --global pager.branch false
```
