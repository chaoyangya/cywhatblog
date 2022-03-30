---
title: "RuntimeWarning:DateTimeField Session.expire_date received a naive datetime"
date: 2022-03-30T10:56:43+08:00
draft: false
tags: ["Django"]
categories: ["Django"]
---

### 前景
Django部署的web应用报警，内容如下：
```text
"RuntimeWarning:DateTimeField Session.expire_date received a naive datetime"
```


### 原因：
```text
这是一个跟时区有关的问题，错误里说到datetime字段得到一个naive datetime，而不是支持time zone的active datetime
由于USE_TZ设置为True，Django会自动根据所设的时区对时间进行转换
程序中和数据保存的时间都转UTC时间，只有模版渲染时会把时间转为TIME_ZONE所设置的时区的时间
使用datetime.datetime.utcnow()输出的是不带时区的utc时间，称为naive time
```

### 解决
```python
from django.utils import timezone

#方法1
#datetime.now()   修改为-->    timezone.now()

#方法2
#datetime.now()   修改为-->    datetime.datetime.now(tz=timezone.utc)
```
