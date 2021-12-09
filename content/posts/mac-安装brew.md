---
title: mac 安装brew
date: 2020-03-18 15:56:49
tags: [Mac,Brew]
categories: ["Mac"]
---

##  【已解决】mac 安装brew
mac是自带ruby的 打开命令行工具terminal
	
1、查看ruby版本
```bash
$ ruby -version
```
![查看ruby版本](https://img-blog.csdnimg.cn/20200318153334646.png)
	
2、然后使用ruby安装brew
```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
![安装brew中](https://img-blog.csdnimg.cn/20200318153528840.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70)

3、brew 安装模块方法(举个例子：安装wget)
```bash
$ brew install wget
```
4、brew卸载模块方法(举个例子：卸载wget)
```bash
$ brew uninstall wget
```

5、其他brew命令
```bash
$ brew list
```

brew跟pip有点类似，其他命令不一一列举了，大家自己help下就好啦
