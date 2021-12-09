---
title: >-
  nvm: Cannot uninstall currently-active node version, vx.x.x (inferred from
  x.x.x)
date: 2021-07-14 17:14:24
draft: false
tags: ["Nvm","Node","Npm"]
categories: ["Npm"]
---

#使用nvm卸载node版本时报错如下:
```bash
$ nvm: Cannot uninstall currently-active node version, vx.x.x (inferred from
  x.x.x)
```

## 需要先退出已经使用的node环境
```bash
$ nvm deactivate
```

## 然后再执行卸载命令
```bash
$ nvm uninstall vx.x.x
```
