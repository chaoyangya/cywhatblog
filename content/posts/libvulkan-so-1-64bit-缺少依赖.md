---
title: libvulkan.so.1()(64bit)缺少依赖
date: 2021-08-20 17:04:44
draft: false
tags: ["Linux"]
categories: ["Linux"]
---

前提:在Linux安装chrome的时候,报错缺少```libvulkan.so.1()(64bit)``` 这个依赖


解决:
```bash
$ sudo yum -y install vulkan-1.1.97.0-1.el7.x86_64
```

