---
title: "ValueError:invalid"
date: 2023-04-14T15:51:46+08:00
draft: false
tags: ["Django","Celery"]
categories: ["Django","Celery"]
---

### 1、前景
`使用django的异步调用场景时，并配置了如下配置：出现了错误：ValueError: Database is int between 0 and limit - 1, not :6379/0`


```bash
#CELERY_BROKER_URL ="redis://127.0.0.1/:6379/0"
#CELERY_BACKEND_URL = "redis://127.0.0.1/:6379/1"
```

### 2、原因
```text
Celery 4.0 以后使用小写的配置变量
```


### 3、解决(更改为小写)
```bash
celery_broker_url = "redis://127.0.0.1/:6379/0"
celery_backend_url = "redis://127.0.0.1/:6379/1"
```