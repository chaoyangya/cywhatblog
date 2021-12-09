---
title: Linux安装jdk11
date: 2021-09-18 17:47:51
draft: false
tags: ["Jdk","Linux"]
categories: ["Jdk"]
---

## 1.下载jdk
[下载安装](https://pan.baidu.com/s/1DWgm0m_QlTq67QFq_BV_8g)
```bash
提取码: brq2
```

## 2.上传到服务器

## 3.解压
```bash
$ tar -zvxf openjdk-11+28_linux-x64_bin.tar.gz
```

## 4.移动文件夹并重命名
```bash
$ mv jdk-11/ /usr/local/java
```

## 5.配置环境变量
```bash
vim /etc/profile

export JAVA_HOME=/usr/local/java
export PATH=$JAVA_HOME/bin:$PATH   #一定要放在最后

source /etc/profile     #让配置生效
```

## 6.建立软链接
```bash
ls -n /usr/local/java/bin/java /usr/bin/java
```

## 7.查看java版本
```bash
java -version
```
