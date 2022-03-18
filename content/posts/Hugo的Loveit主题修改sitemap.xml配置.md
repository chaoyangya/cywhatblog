---
title: "Hugo的Loveit主题修改sitemap"
date: 2022-03-18T11:31:21+08:00
draft: false 
tags: ["Hugo","Loveit"]
categories: ["Hugo","Loveit"]
---


### 前景：
要解决的问题是在Hugo自动生成的sitemap.xml文件中（sitemap.xml等于是给搜索引擎看的网站的目录），出现了很多无关的链接，导致无法正确收录，比如说如下图所示：

![img50](/img/img50.png)

### 问题：

![img51](/img/img51.png)

### 解决：

#### 1.找到/themes/LoveIt/layouts/sitemap.xml文件

原文件内容为：

![img52](/img/img52.png)


#### 2.修改标记出来的一行

```html
  {{- range .Site.RegularPages -}}
```

#### 3.重新生成静态文件
```bash
hugo
```

#### 4.查看sitemap.xml内容

![img53](/img/img53.png)


##### 5.重新提交代码即可