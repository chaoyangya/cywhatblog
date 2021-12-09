---
title: Linux关闭防火墙
date: 2021-09-01 10:43:37
draft: false
tags: ["Linux"]
categories: ["Linux"]
---

**注意:ConterOS7.0以上使用的是firewall，ConterOS7.0以下使用的是iptables**



## 1.查看防火状态
```bash
$ systemctl status firewalld  #7.0以上

$ service  iptables status  #7.0以下
```




## 2.暂时关闭防火墙
```bash
$ syatemctl stop firewalld     #7.0以上

$ service  iptables stop      #7.0以下
```


## 3.永久关闭防火墙
```bash
$ systemctl disable firewalld    #7.0以上

$ chkconfig iptables off     #7.0以下
```




## 4.重启防火墙
```bash
$ systemctl enable firewalld  #7.0以上

$ service iptables restart  #7.0以下
```


