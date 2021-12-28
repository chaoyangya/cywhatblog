---
title: Centos7安装chrome浏览器
date: 2021-08-20 17:08:45
draft: false
tags: ["Centos","Linux"]
categories: ["Centos"]
---

### 1.下载chrome for linux压缩包

[百度网盘](https://pan.baidu.com/s/1WwxOb1LiRSL2DnXvKlacZw)
```bash
$  提取码: 1f4n    
```

[更多版本](https://www.chromedownloads.net/chrome64linux/)

### 2.上传解压压缩包
```bash
$ unzip google-chrome-stable_deb_rpm_91.0.4472.77.zip  #解压完成会出现 .deb 和 .rpm 的俩个文件
```

### 3.安装解压chrome所需依赖包
```bash
$ yum install -y lsb
  yum install -y libXScrnSaver
  yum install -y liberation-fonts
  yum install -y libdbusmenu-gtk3
  yum install epel-release
```

### 4.安装chrome
```bash
$ sudo rpm -ivh google-chrome-stable_current_x86_64.rpm 
```

### 5.启动服务
```bash
$ systemctl start atd.service
```

