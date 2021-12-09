---
title: npm切换版本
date: 2021-07-14 17:18:21
draft: false
tags: ["Npm","Node"]
categories: ["Npm"]
---

# Npm切换版本
npm需要切换版本如果没有安装nvm很头疼,会存在以下三种情况:

    ① Node环境还在,只是Npm被卸载
    ② Npm和Node版本不兼容
    ③ 存在多个Npm版本,无法切换

**PS:如果存在以上三种情况的,强烈建议,直接Nvm重新装Node,简单粗暴**

## 卸载Node
```bash
$ nvm uninstall vx.x.x
```

## 安装指定Node版本
```bash
$ nvm install vx.x.x
```

## 查看Node/Npm版本
```bash
$ node -v

$ npm -v
```
