---
title: "Django连接Mysql配置"
date: 2022-04-24T11:15:56+08:00
draft: false
tags: ["Django","Mysql"]
categories: ["Django","Mysql"]
---


### 环境准备
```text
编译环境：Python3.7.0
编辑器：Pycharm
解释环境：Virtualenv python=3.7.0
```

### 1.新建Django项目
`各个代码编辑器都支持`
#### 安装Django和Mysql

```bash
pip3 install Django==1.11.7   #其他版本也可,Django后不加版本即可安装最新版

pip3 install pymysql
```

#### 构建web应用
```bash
python3  manage.py startapp web 
```

### 2.修改Django配置
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',  # 默认
        'NAME': 'XXXX',  # 连接的数据库名
        'HOST': 'localhost',  # mysql的ip地址
        'PORT': 3306, # mysql的端口
        'USER': 'root',  # mysql的用户名
        'PASSWORD': 'XXXX'  # mysql的密码
    }
}
```

### 3.项目配置
```python
#找到根目录项目中的__init__.py文件，输入以下内容
import pymysql


pymysql.install_as_MySQLdb()
```

### 4.数据更新
```bash
python3 manage.py makemigrations   #创建类数据库表

python3 manage.py migrate     #表数据写入(字段属性等)
```

### 5.库表数据查看

本地连接到数据库查看已经有了我们在`models`创建的表

![img59.png](/img/img59.png)