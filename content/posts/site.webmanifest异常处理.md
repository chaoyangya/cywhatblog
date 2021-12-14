---
title: "Site.webmanifest异常处理"
date: 2021-12-14T15:14:48+08:00
draft: false
tags: ["Hugo"]
categories: ["Hugo"]
---

### 1.前景
搭建完博客后，发现开发者模式中`site.webmanifest`加载非常慢，最后加载异常(404/超时等),严重拖慢博客的加载速度


### 2.生成博客所需要的图片文件

#### 1).打开：`https://realfavicongenerator.net/`

#### 2).选择`Select your Favicon image`按钮，上传自己的图片

![img35.png](/img/img35.png)

#### 3).选择`continue with this picture`

![img34.png](/img/img34.png)

#### 4).滑到页面最下方，选择`Generate your Favicons and HTML code`

![img36.png](/img/img36.png)

#### 5).选择`HTML 5`，选择`favicon package`

![img37.png](/img/img37.png)

### 3.将文件夹所有内容存储到博客

将文件夹中所有内容都`copy`到博客的`static`文件夹下即可

![img38.png](/img/img38.png)

### 4.修改`site.webmanifest`文件内容

`name`和`short_name`值修改为网站url即可

### 5.重新生成发布
发现`site.webmanifest`的问题就已经解决了


    




