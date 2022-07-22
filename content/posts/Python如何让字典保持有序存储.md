---
title: "Python如何让字典保持有序存储"
date: 2022-07-22T14:37:10+08:00
draft: false
tags: ["Python"]
categories: ["Python"]
---

### 前景
众所周知`python`的字典`dict`是无序的和元组不同，但是一些特定场景，又需要字典中的数据是有序的，分享并记录下如何解决

### 注意
**python3.7之后字典就更改为有序存储了，不需要重新定义，python3.7之前的可以用以下方法重新定义为有序存储**


### 案例

#### 无序演示

```python
dict1 = {'a':1,"b":2,"c":3}

print(dict1)

#多次执行，结果如下：
{'a':1,"b":2,"c":3}

{'a':1,"b":2,"c":3}

{"b":2,'a':1,"c":3}

{"c":3,'a':1,"b":2}

{'a':1,"c":3,"b":2}
```

### 解决

#### 有序演示

```python
import collections
dict2 = collections.OrderedDict()
dict2['a'] = 1 
dict2['b'] = 2
dict2['c'] = 3

print(dict2)

#多次执行，结果如下：
{'a':1,"b":2,"c":3}

{'a':1,"b":2,"c":3}

{'a':1,"b":2,"c":3}

{'a':1,"b":2,"c":3}

{'a':1,"b":2,"c":3}
```