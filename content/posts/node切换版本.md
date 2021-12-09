---
title: node切换版本
date: 2021-08-17 16:00:12
draft: false
tags: ["Node"]
categories: ["Node"]
---

## 1.安装n
```bash
$ npm install -g n
```

## 2.使用 n 下载所需node
```bash
$ n 10.16.3  #版本号 不需要加v
```

### 下载最新版本
```bash
$ n latest
```

### 删除某个版本
```bash
$ n rm 10.16.3  #版本号 不需要加v
```

### 查看已安装版本
```bash
$ n ls
```

## 3.新安装的node版本,需要使用ls切换
```bash
$ n ls 10.16.3 #会出现所安装的所有node版本,使用版本在最上方
```

## 4.查看node版本
```bash
$ node -v
```

