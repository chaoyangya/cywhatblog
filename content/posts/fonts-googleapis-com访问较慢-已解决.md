---
title: 'fonts.googleapis.com访问较慢[已解决]'
date: 2021-10-12 18:14:32
draft: false
tags: ["Django"]
categories: ["Django"]
---

**前景：**

`自己写的测试工具发现最近打开页面时快时慢，查了原因，发现是css引用的谷歌字体源：fonts.googleapis.com`

# 解决办法：

### 1.替换字体库源地址
```bash
查找引用了谷歌源的css文件 更换源地址

fonts.googleapis.com   更换为--->   cdnjs.loli.net 
```

### 2.如果是html引用，更改link
```html
<link rel="stylesheet" href="https://cdnjs.loli.net/css?family=IBM+Plex+Sans:" >
```

### 3.字体下载到本地(推荐)
```bash
#1.下载google字体
url访问 https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i|Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap

#2.保存css字体文件到本地，并重命名

#3.css/html引入字体文件
  html
    <link rel="stylesheet" href="/fonts.css" >
    
  css
    import "fonts.css";
```

### 4.重新访问页面
```bash
访问时长达到了 ms 级别
```
