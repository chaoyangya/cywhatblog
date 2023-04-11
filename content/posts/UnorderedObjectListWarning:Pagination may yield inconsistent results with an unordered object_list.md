---
title: "UnorderedObjectListWarning:Pagination May Yield Inconsistent Results With an Unordered Object_list"
date: 2023-04-11T17:45:05+08:00
draft: false
tags: ["Django"]
categories: ["Django"]
---

### 1、问题
```text
使用django进行分页查询的时候，报错如下内容
```
`UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list`


### 2、原因
```text
django分页可能会产生与无序对象列表不一致的结果,因为使用了djangorestframe,展示结果为排序造成的
```

### 3、解决
#### 1、在视图函数的查询中加入排序
```python
case_list = PresInfo.objects.all().order_by('id')
```

#### 2、在模型上加入排序
```python
class PresInfo(models.Model):
    id = models.BigAutoField(primary_key=True, db_index=True)
    deviceId = models.CharField(verbose_name='设备ID', max_length=64)
    user = models.CharField(verbose_name='提交人', max_length=64)
    count = models.CharField(verbose_name='压测数量', max_length=64)
    counted = models.CharField(verbose_name='已执行数量', max_length=64, null=True)
    env = models.CharField(verbose_name='环境', max_length=64, default="IOT")
    status = models.SmallIntegerField(verbose_name='状态', default=0,help_text="0:未开始, 1:进行中， 2:已停止")
    create_datetime = models.DateTimeField(verbose_name='创建时间', auto_now_add=True)

class Meta:
        ordering=['id']   
```

#### 3、重启项目，重新打开网页
```text
重启生效
```