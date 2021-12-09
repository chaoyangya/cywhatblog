---
title: .gitignore不生效的解决方案
date:  2021-04-01 18:17:13
draft: false
tags: ["Git",".gitignore"]
categories: ["Git"]
---


**原因：git本地运行有缓存，需要清楚git缓存即可**

```bash
$ git rm -r --cached .
```

## 注意：
清完缓存需要把代码推到远程仓库

