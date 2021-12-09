---
title: 'no such table:django_session'
date: 2021-04-01 17:51:03
draft: false
tags: ["Django"]
categories: ["Django"]
---


**出现上述问题是django没有django_session表**

错误跟Session的机制相关
既然要从Web服务器端来记录用户信息，
那么一定要有存放用户session id对应信息的地方才行

django创建存放session表命令如下：

```bash
$ python manage.py migrate
```

出现很多绿色的ok即创建完成
