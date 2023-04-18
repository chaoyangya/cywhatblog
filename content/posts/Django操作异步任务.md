---
title: "Django操作异步任务"
date: 2023-04-18T14:42:49+08:00
draft: false
tags:  ["Django"]
categories: ["Django"]
---

### 前置条件

```text
Python==3.7.0
Pip==3
Django==3.2
celery==5.0.5
redis==3.5.3
```

### 1、安装

```bash
pip3 install celery
```

### 2、目录

```bash
- Heng_Tools/
  - manage.py
  - Heng_Tools/
    - __init__.py # 修改这个文件
    - celery.py # 新增这个文件
    - asgi.py
    - settings.py # 修改这个文件
    - urls.py
    - wsgi.py
  - web/
    - static/
    - forms/
    - views/
    - temples/
    - admin.py
    - models.py
    - apps.py
    - views.py
```

#### 2.1、修改`__init__.py`配置

```python
# 加入如下配置
from .celery import app as celery_app

__all__ = ('celery_app',)
```

#### 2.2、新增文件`celery.py`

```python
# 加入如下代码
import os
from celery import Celery

# 设置环境变量
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Heng_Tools.settings')

# 实例化
app = Celery('Heng_Tools')

# namespace='CELERY'作用是允许你在Django配置文件中对Celery进行配置
# 但所有Celery配置项必须以CELERY开头，防止冲突
app.config_from_object('django.conf:settings', namespace='CELERY')

# 自动从Django的已注册app中发现任务
app.autodiscover_tasks()


# 一个测试任务
@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
```

#### 2.3、修改`settings`

{{< admonition type=note title="注意" open=false >}}
settings和Heng_Tools同目录
{{< /admonition >}}

```python
# 关掉修改默认市区
USE_TZ = False

# 最重要的配置，设置消息broker,格式为：db://user:password@host:port/dbname
# 如果redis安装在本机，使用localhost
# 如果docker部署的redis，使用redis://redis:6379
celery_broker_url = "redis://127.0.0.1/:6379/0"
celery_backend_url = "redis://127.0.0.1/:6379/1"

# 时区设置
CELERY_TIMEZONE = 'Asia/Shanghai'
CELERY_RESULT_BACKEND = "django-db"
CELERY_ACCEPT_CONTENT = ['application/json', ]
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'

# INSTALLED_APPS加入如下配置
INSTALLED_APPS = [
    'celery',
    'django_celery_beat',
    'django_celery_results'
]
```

### 3、新增task

{{< admonition type=note title="注意" open=false >}}
新增的异步任务必须以`task.py`命名，而且要放在你的django-web程序中，我这里是`web`
{{< /admonition >}}

```python
from celery import Celery

# 专属于myproject项目的任务
app = Celery('Heng_Tools')


@app.task
def test():
    pass

```

```python
from celery import Celery

# app/tasks.py, 可以复用的task
from celery import shared_task
import time


@shared_task
def add(x, y):
    time.sleep(2)
    return x + y
```

```text
装饰器`@shared_task`可以让我们避免对某个项目名对应Celery实例的依赖，使app的可移植性更强。
```

### 4、运行

```bash
Celery -A Heng_Tools worker -l info     
```

```bash
# 如果看到这行就说明启动成功了
[2023-04-18 15:27:03,191: INFO/MainProcess] celery@cywhat ready.

```

### 5、调用异步任务[俩种任务都会返回一个taskId]

#### 5.1、调用方法1

```python
result = add.delay(3, 5)
```

#### 5.1、调用方法2

```python
# apply_async方法，与delay类似，但支持更多参数
result = add.apply_async(args=[3, 5])
```


### 6、安装flower监控
```bash
# 安装
pip3 install flower

# 运行
celery -A  Heng_Tools  flower
```


### 7、异步任务的一些操作

```python
# 查看task的任务id
result.task_id

# 查看task的任务状态
result.status

# 获取task的结果
AsyncResult(result.task_id).result

# 获取task的状态
AsyncResult(result.task_id).result

# 取消正在进行中的task任务
AsyncResult(result.task_id).revoke(terminate=True)
```