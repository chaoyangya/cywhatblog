---
title: "Failed to Extract Shortcode:template for Shortcode Admonition Not Found"
date: 2022-10-13T11:19:11+08:00
draft: false
tags: ["Hugo"]
categories: ["Hugo"]
---

### 1、问题
`换新设备后迁移基于hugo构建的静态博客出现的报错，报错如下：`

`failed to extract shortcode: template for shortcode "admonition" not found`


### 2、原因
``未使用hugo_extended版本，导致loveit主题自带的"admonition"模块没有渲染出来报错了``


### 3、解决
```text
1、下载安装hugo_extended版本

2、初始化submodule

git submodule update --init --recursive
```

[安装hugo_extended](https://github.com/gohugoio/hugo/tags)