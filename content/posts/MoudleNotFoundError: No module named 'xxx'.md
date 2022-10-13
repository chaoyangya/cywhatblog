---
title: "MoudleNotFoundError: No module named 'xxx'"
date: 2022-10-13T11:30:33+08:00
draft: false
tags: ["Python"]
categories: ["Python"]
---

### 1、报错
```bash
MoudleNotFoundError: No module named 'xxx'
```

### 2、排查解决
```text
1、module包没安装
2、忘了import
3、没有__init__.py文件(很重要)
4、package包的版本不对
5、自定义的包名与安装的包名相同，导致import包的时候导错了包
6、没设置PYTHONPATH或者解释器没选对
7、自建的module包所在路径不在PYTHONPATH下
8、虚拟环境选择错误
```