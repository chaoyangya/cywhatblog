---
title: "Django删除表重建"
date: 2022-08-05T11:39:03+08:00
draft: false
tags: ["Django"] 
categories: ["Django"] 
---

### 前景
可能是在建表之后又修改了mysql的配置，导致`models`中的`CharField`不支持汉字，调试了很久都不行，各种配置无果后决定删表重建

### 1.注释
```text
1.注释建表models

2.注释视图函数view

3.注释form表单
```


### 2.删除表
```text
1.手动删除

2.drop xxx (需到mysql-shell中执行)
```



### 3.更新数据库表变化
```python
python3 manage.py makemigrations

python3 manage.py migrate --fake
```


### 4.去掉注释重新建表
```python
python3 manage.py makemigrations

python3 manage.py migrate
```

