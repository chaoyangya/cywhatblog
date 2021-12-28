---
title: Django自定义404页面
date: 2021-09-17 19:52:13
draft: false
tags: ["Django"]
categories: ["Django"]
---

### 前景：
使用django部署的web应用，在url错误的情况下，页面会报错简单的404页面，并不美观

Django版本：1.11.7  **高于2.0版本不可使用以下语法，切记**

### 1.settings设置
```bash
修改 settings.py 的配置如下  #自定义页面会在非调试模式下生效，所以debug=false

DEBUG=False
 
ALLOWED_HOST=["*"]
```

### 2.项目根目录下的views.py配置
```python
views.py

from django.shortcuts import render

def page_not_found(request):
    return render(request,'404.html')  #404的html要写你自定义的404html文件

```

### 3.项目根目录的urls.py配置
```python
urls.py   #如果urls有别的路由位置，也必须在原urls.py文件下修改，否则不生效
from . import views

handler404 = views.page_not_found
```

### 4.重新发布即可生效
