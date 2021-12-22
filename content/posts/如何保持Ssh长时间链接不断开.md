---
title: "如何保持Ssh长时间连接不断开"
date: 2021-12-22T14:29:11+08:00
draft: false
tags: ["Linux"]
categories: ["Linux"]
---



###  前景：

**新购入的华为云服务器`SSH`连接5分钟没有任何操作就自动断开了，该文章主要为了解决该问题，同样的场景适合各种云服务器/本地物理服务器等**

### 1.查看服务器配置
```bash
cat  /etc/ssh/sshd_config 
```

### 2.搜索配置项
```bash
/  ClientAliveInterval  #每X秒向客户端发送一次保持连接的信号
/  ClientAliveCountMax  #表示客户端如果X次没有响应则断开连接
```

### 3.添加配置或打开配置
**有些高版本的系统中是有这俩项配置的，只需要把注释去掉，设置`多少s`即可，配置好的如下**

![img41.png](/img/img41.png)

### 4.保存且重启SSH服务
```bash
#保存
: wq

#重启SSH服务
service sshd restart
```