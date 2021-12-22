---
title: Java线上问题排查
date: 2021-07-20 10:03:12
draft: false
tags: ["Java"]
categories: ["Java"]
---

## top 查看占用资源信息以及pid
```bash
$ top 
```

## 查看pid下绑定线程
```bash
$ top -Hp pid1(进程id)
```

## 拿到需要查询的线程pid,转换成16进制
```bash
$ printf '%x' pid2(线程id)  ==> 6a4     #6a4为输出结果
```

## 通过jstack讲java信息输出到文本
```bash
$ jstack pid1(进程id) > t.txt
```

**如果jstack报错,请查看 [jstack不存在](https://cywhat.cn/bash-jstack-%E6%9C%AA%E6%89%BE%E5%88%B0%E5%91%BD%E4%BB%A4/)**

## 在t.txt文件中查找```6a4```
```bash
$ vim t.txt

$ /6a4
```
## 然后找到自己的collectorl业务代码层具体行数去分析

