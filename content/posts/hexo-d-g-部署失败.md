---
title: hexo d -g 部署失败
date: 2021-08-17 18:07:39
draft: false
tags: ["Hexo"]
categories: ["Hexo"]
---

hexo d -g 突然部署失败,报错如下:
```bash
$ fatal: unable to access 'https://github.com/xxxxx/xxxx.git/': The requested URL returned error: 403
  err: Error: Spawn failed       
  at ChildProcess.<anonymous
```

## 1.更改hexo配置文件中的git镜像映射地址
```bash
$ vim _config.yml   #将https的地址更改为git开头的地址,如图
```

![img4](/img/img4.png)



## 2.检查发布机器和github之间的公私钥是否配对

## 3.hexo清楚缓存
```bash
$ hexo clean
```

## 4.重新发布
```bash
$ hexo d -g
```

## 5.发布成功
