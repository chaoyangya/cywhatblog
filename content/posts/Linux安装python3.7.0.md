---
title: "Linux安装python3.7"
date: 2021-12-23T15:13:53+08:00
draft: false
tags: ["Python","Linux"]
categories: ["Python"]
---

### 前景
**新服务器搭建`Django Web`服务需要安装`python3.7.0`

### 1.前置条件(一定要在安装之前)
安装`python`需要依赖(-y：安装过程中不需要再次输入y确认)
```bash
yum update

yum upgrade

yum install zlib* -y 

yum install libffi-devel -y 

yum install openssl-devel -y 

yum install install build-essential python-dev python-setuptools python-pip python-smbus -y
```

### 2.下载Python3.7.0

#### a.下载方式1

[下载地址](https://www.python.org/ftp/python/3.7.0/)

**下载文件，然后上传到服务器**

#### b.下载方式2

```bash
wegt https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tgz.xz
```

### 3.安装Python3.7.0
```bash
#1.解压文件
tar -xvJf Python-3.7.0.tgz.xz

#如文件结尾为`tgz`,使用以下解压命令
tar -zvxf Python-3.7.0.tgz

#2.配置安装python3的路径
cd Python-3.7.0

./configure --prefix=/usr/local/python3

#3.编译安装
make && make install
```

PS:这里要确认编译安装完一定出现`succeeful`，请确认是否安装成功，如安装不成功可能会出现错误具体错误信息请自行百度或者查看博主其他`python`标签下的文章


### 4.配置软链接
```bash
ln -s /usr/local/python3/bin/python3.7 /usr/bin/python3

ln -s /usr/local/python3/bin/pip3.7 /usr/bin/pip3
```

### 5.检查Python版本
```bash
python -V

pip -V
```