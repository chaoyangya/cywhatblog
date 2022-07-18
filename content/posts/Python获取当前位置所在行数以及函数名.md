---
title: "Python获取当前位置所在行数以及函数名"
date: 2022-07-18T14:54:45+08:00
draft: false
tags: ["Python"]
categories: ["Python"]
---


### 代码

```python

# encoding=utf-8
import sys
def get_python_info():
    print('当前文件名 {} '.format(sys._getframe().f_code.co_filename))
    print('所属函数名 {} '.format(sys._getframe().f_code.co_name))
    print('第 {} 行 '.format(sys._getframe().f_lineno))
    
# 执行
get_python_info()
```


```python
# 执行结果如下：
当前文件名 xxxxx
所属函数名 get_python_info
第 19 行
```