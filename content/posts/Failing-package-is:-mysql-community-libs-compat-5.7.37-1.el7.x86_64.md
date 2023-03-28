---
title: "Failing Package Is: Mysql Community Libs Compat 5.7.37 1.el7"
date: 2023-03-27T16:17:41+08:00
draft: false
tags: ["Mysql"]
categories: ["Mysql"]
---

### 1、安装Mysql出现以下错误
```Failing package is: mysql-community-libs-compat-5.7.37-1.el7.x86_64```


### 2、问题原因
```text
There is no separate signature. RPM packages have a built-in GPG signature and MD5 checksum.
```

### 3、解决
```bash
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
```