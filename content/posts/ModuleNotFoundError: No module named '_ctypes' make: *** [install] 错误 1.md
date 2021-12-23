---
title: "ModuleNotFoundError: No Module Named '_Ctypes' Make: *** [Install] 错误 1"
date: 2021-12-23T10:44:14+08:00
draft: false
tags: ["Python","Linux"]
categories: ["Python"]
---

### 前景
**新服务器安装`python3.7.0`在`make install`的时候报错`ModuleNotFoundError: No module named '_ctypes' make: *** [install] 错误 1`导致编译安装失败**

### 1.原因
缺少安装`python`依赖

### 2.解决
```bash
#安装依赖
yum install libffi-devel -y 

#重新安装
make install
```

### 3.完成
```bash
python -V
```
